import React, {useEffect, useRef, useState} from 'react';
import firebaseApp from '../../firebase/firebaseApp';
import { v4 as uuidv4 } from 'uuid';

var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

const FormAddProduct = ({handleCloseModal, isOpenAdd}) => {
    const [product,setProduct] = useState({name: '',price:'',category:'',saleof:'',description:'',image:''})
    const [imageAsFile, setImageAsFile] = useState('')
    const [urlLocal, SetUrlLocal] = useState('')
    const cateRef = useRef(null)
    const [imageAsUrl, setImageAsUrl] = useState('')

    const AddProduct = async () => {
        if(imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
          }
        const uploadTask = firebaseApp.storage().ref(`/images/product/${imageAsFile.name}`).put(imageAsFile)
        uploadTask.on('state_changed',(snapshot) => {
            console.log(snapshot,'handle upload image')
        }, (error) => {
            console.log(error, 'error when upload image to storage')
        }, () => {
            firebaseApp.storage().ref('images/product').child(imageAsFile.name).getDownloadURL()
            .then(async (url)=>{
                setImageAsUrl(prevObject => ({...prevObject, imgUrl: url}))
                await firebaseApp.database().ref('products/').push({
                    cate: '1 2',
                    date: utc,
                    description: product.description,
                    img: url,
                    price: product.price,
                    productName: product.name,
                    saleof: parseInt(product.saleof),
                    productID: uuidv4()
                })
                handleCloseModal()
                setProduct({name: '',price:'',category:'',saleof:'',description:'',image:''})
            })
            .catch(error => {
                console.log(error.message,'error add')
            })
        }
        )
    }

    useEffect(()=>{
        setProduct({name: '',price:'',category:'',saleof:'',description:'',image:''})
        SetUrlLocal('')
        console.log(cateRef.current,'cateref current')
    },[isOpenAdd])

    const handleChangeName = (e) => {
        setProduct({...product,name:e.target.value})
    }

    const handleChangePrice = (e) => {
        setProduct({...product,price:e.target.value})
    }

    const handleChangeCategory = (e) => {
        setProduct({...product,category:e.target.value})
    }

    const handleChangeSale = (e) => {
        setProduct({...product,saleof: e.target.value})
    }

    const handleChangeImage = (e) => {
        const image = e.target.files[0]
        if(image){
            SetUrlLocal(URL.createObjectURL(e.target.files[0]))
        }
        setImageAsFile(imageFile => (image))
    }

    const handleChangeDescription = (e) => {
        setProduct({...product,description:e.target.value})
    }

    const handleSubmitAdd = (e) => {
        e.preventDefault();
        AddProduct();
    }

    return (
        <form onSubmit={(e)=>handleSubmitAdd(e)} className="form-add">
            <label>Product Name</label>
            <input 
                type="text"
                id="fname"
                value={product.name}
                name="firstname" 
                placeholder="Your name.." 
                onChange={(e)=>handleChangeName(e)}
            />

            <label>Price</label>
            <input
                type="text" 
                id="lname" 
                name="lastname"
                value={product.price}
                placeholder="Your last name.." 
                onChange={(e)=>handleChangePrice(e)}
            />

            <label>Category</label>
            <select 
                id="category" 
                name="category"
                onChange={(e)=>handleChangeCategory(e)}
                ref={cateRef}
            >
                <option id="option_cate_none" selected value="0"></option>
                <option value="1">Oranges</option>
                <option value="2">Fresh Meat</option>
                <option value="3">Vegetables</option>
                <option value="4">Fastfood</option>
            </select>

            <label>sale of (%)</label>
            <input 
                onChange={(e) => 
                handleChangeSale(e)} 
                type="text" 
                id="saleof" 
                name="saleof" 
                value={product.saleof}
                placeholder="sale" 
            />

            <label>Image:</label>
            <input 
                onChange={(e) => 
                handleChangeImage(e)} 
                type="file" 
                id="image" 
                name="image"
                accept="image/*"
            />
            <img src={urlLocal} className="image_product_add" />

            <label>Description</label>
            <textarea 
                onChange={(e) => handleChangeDescription(e)} 
                id="description"
                value={product.description}
            >

            </textarea>

            <input type="submit" value="Submit" />
        </form>
    );
}

export default FormAddProduct;
