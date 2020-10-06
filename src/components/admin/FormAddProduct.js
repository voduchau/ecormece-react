import React, {useState} from 'react';
import firebaseApp from '../../firebase/firebaseApp';
import { v4 as uuidv4 } from 'uuid';

var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

const FormAddProduct = () => {
    const [product,setProduct] = useState({name: '',price:'',category:'',saleof:'',description:'',image:''})
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState('')
    //cate, date, description, img, price, productID, productName, saleof
    const AddProduct = async () => {
        if(imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
          }
        const uploadTask = firebaseApp.storage().ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        uploadTask.on('state_changed',(snapshot) => {
            console.log(snapshot,'handle upload image')
        }, (error) => {
            console.log(error, 'error when upload image to storage')
        }, () => {
            firebaseApp.storage().ref('images').child(imageAsFile.name).getDownloadURL()
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
            })
        }

        )
    }

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
        // console.log(e.target.files[0],'this e')
        const image = e.target.files[0]
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
                name="firstname" 
                placeholder="Your name.." 
                onChange={(e)=>handleChangeName(e)}
            />

            <label>Price</label>
            <input 
                type="text" 
                id="lname" 
                name="lastname" 
                placeholder="Your last name.." 
                onChange={(e)=>handleChangePrice(e)}
            />


            <label>Category</label>
            <select 
                id="category" 
                name="category"
                onChange={(e)=>handleChangeCategory(e)}
            >
                <option value="Oranges">Oranges</option>
                <option value="Fresh Meat">Fresh Meat</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fastfood">Fastfood</option>
            </select>

            <label>sale of (%)</label>
            <input onChange={(e) => handleChangeSale(e)} type="text" id="saleof" name="saleof" placeholder="sale" />

            <label>Image:</label>
            <input onChange={(e) => handleChangeImage(e)} type="file" id="image" name="image" />

            <label>Description</label>
            <textarea onChange={(e) => handleChangeDescription(e)} id="description">

            </textarea>

            <input type="submit" value="Submit" />
        </form>
    );
}

export default FormAddProduct;
