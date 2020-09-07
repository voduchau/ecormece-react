import React, { useContext, useState, useEffect } from 'react';
import './FeatureItem.css'
import { GetItemContext } from '../../../context/GetItemContext';
import { CartContext } from '../../../context/CartContext';
const FeatureItem = ({ allCate, itemft, activeTab, name, price, categories, img }) => {
    const [cate, setCate] = useState('');
    const { cartItem, AddToCart } = useContext(CartContext)

    const HandleAddToCart = () => {
        console.log()
        AddToCart(itemft);
    }

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
                        <li><a href=""><i className="fa fa-heart"></i></a></li>
                        <li><a href=""><i className="fa fa-retweet"></i></a></li>
                        <li><a><i onClick={() => HandleAddToCart()} className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="featured__item__text">
                    <h6><a href="/#">{itemft.productName}</a></h6>
                    <h5>{`$${itemft.price}.00`}</h5>
                </div>
            </div>
        </div>
    );
}

export default FeatureItem;
