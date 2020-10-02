import React,{useContext,useState} from 'react';
import { useEffect } from 'react';
import {GetItemContext} from '../../context/GetItemContext';

const FilterItem = () => {
    const {item} = useContext(GetItemContext)
    const [amount, setAmount ] = useState(0)
    useEffect(()=>{
        if(item.filterProducts){
            setAmount(item.filterProducts.length)
        }
    },[item.filterProducts])
    return (
        <div className="filter__item">
            <div className="row">
                <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                        <span>Sort By</span>
                        <select>
                            <option value="0">Default</option>
                            <option value="0">Default</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                    <h6><span>{amount}</span> Products found</h6>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                        <span className="icon_grid-2x2"></span>
                        <span className="icon_ul"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterItem;
