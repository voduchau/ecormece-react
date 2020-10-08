import React from 'react';

const FormViewProduct = ({handleCloseModalView}) => {
    
    const AddProduct = async () => {
       
    }

    const handleChangeName = (e) => {
    }

    const handleChangePrice = (e) => {
    }

    const handleChangeCategory = (e) => {
    }

    const handleChangeSale = (e) => {
    }

    const handleChangeImage = (e) => {
        // console.log(e.target.files[0],'this e')
    }

    const handleChangeDescription = (e) => {
        
    }

    const handleSubmitAdd = (e) => {

    }
    return (
        <form onSubmit={(e) => handleSubmitAdd(e)} className="form-add">
            <label>Product Name</label>
            <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                onChange={(e) => handleChangeName(e)}
            />

            <label>Price</label>
            <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                onChange={(e) => handleChangePrice(e)}
            />


            <label>Category</label>
            <select
                id="category"
                name="category"
                onChange={(e) => handleChangeCategory(e)}
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

export default FormViewProduct;
