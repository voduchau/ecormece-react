import React, { useContext, useEffect, useState } from 'react';
import { GetItemContext } from '../../context/GetItemContext';
import ProductFilterItem from './ProductFilterItem';
import { useHistory } from "react-router-dom";

const ProductFilter = () => {
    const {item,GetAllProducts, FilterItem} = useContext(GetItemContext)

    const renderItem = () => {
        return item.filterProducts && item.filterProducts.map(item1 => {
            if(!item1.saleof){
                return <ProductFilterItem key={item1.productID} item={item1} />
            }
        })
    }
    useEffect(()=>{
        GetAllProducts()
    }, [])
    // useEffect(()=>{
    //     GetAllProducts()
    // }, [])
    return (
        <div className="row">
            {renderItem()}
        </div>
    );
}

export default ProductFilter;
