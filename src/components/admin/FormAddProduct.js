import React, {useState} from 'react';
import firebaseApp from '../../firebase/firebaseApp';


var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

const FormAddProduct = () => {
    const [product,setProduct] = useState({name: '',price:'',category:'',saleof:'',description:'',image:''})

    //cate, date, description, img, price, productID, productName, saleof
    const AddProduct = () => {
        firebaseApp.database().ref('products/').push({
            cate: '1',
            date: utc,
            description: product.description,
            img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&w=1000&q=80',
            price: product.price,
            productName: product.name,
            saleof: product.saleof
        })
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
            <input type="file" id="image" name="image" />

            <label>Description</label>
            <textarea onChange={(e) => handleChangeDescription(e)} id="description">

            </textarea>

            <input type="submit" value="Submit" />
        </form>
    );
}

export default FormAddProduct;
