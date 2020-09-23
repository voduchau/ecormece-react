import React, { useContext, useEffect } from 'react';
import { GetItemContext } from '../../context/GetItemContext';
import ProductFilterItem from './ProductFilterItem';

const ProductFilter = () => {
    const {item,GetAllProducts} = useContext(GetItemContext)

    const renderItem = () => {
        return item.products.map(item1 => {
            return <ProductFilterItem key={item1.productID} item={item1} />
        })
    }
    useEffect(()=>{
        GetAllProducts()
    }, [])
    return (
        <div class="row">
            {renderItem()}
        </div>
    );
}

export default ProductFilter;
