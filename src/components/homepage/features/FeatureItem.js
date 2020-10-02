import React, { useState, useEffect } from 'react';
import './FeatureItem.css'
import GroupIconCart from '../../shared/GroupIconCart';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

const FeatureItem = ({ allCate, itemft, activeTab, name, price, categories, img }) => {
    const [cate, setCate] = useState('');

    useEffect(() => {
        const arrItem1 = itemft.cate.split(" ")
        const temp = []
        arrItem1.map(item2 => {
            allCate.map(item3 => {
                if (item3.cateID == item2) {
                    temp.push(item3.cateName.replace(/ +/g, ""))
                }
            })
        })
        setCate(temp.toString().replace(",", " "))
    }, [allCate])

    return (
        <div className={`col-lg-3 col-md-4 col-sm-6 mix ${cate}`}>
            <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg={img} style={{ backgroundImage: `url(${itemft.img})` }}>
                    <ul className="featured__item__pic__hover">
                        <GroupIconCart item={itemft} />
                    </ul>
                </div>
                <div className="featured__item__text">
                    <h6><Link to={{
                        pathname: `/shop-detail/${itemft.productID}`,
                        // search: "?sort=name",
                        // hash: "#the-hash",
                        key: uuidv4(),
                        state: { item: itemft }
                    }}>{itemft.productName}</Link></h6>
                    <h5>{`$${itemft.price}.00`}</h5>
                </div>
            </div>
        </div>
    );
}

export default FeatureItem;
