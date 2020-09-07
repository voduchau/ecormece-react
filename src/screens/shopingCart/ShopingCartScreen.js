import React, { Component } from 'react'
import Header from '../../components/header/Header';
import HeroCategory from '../../components/homepage/hero/HeroCategory';
import HeroSearch from '../../components/homepage/hero/HeroSearch';
import BreadCrumb from '../../components/shopingcart/BreadCrumb';
import ShopingCartContent from '../../components/shopingcart/ShopingCartContent';

const ShopingCartScreen = () => {
    return (
        <>
            <Header />
            <section className="hero hero-normal">
                <div className="container">
                    <div className="row">
                        <HeroCategory />
                        <div className="col-lg-9">
                            <HeroSearch />
                        </div>
                    </div>
                </div>
            </section>
            <BreadCrumb />
            <ShopingCartContent />
        </>
    );
}

export default ShopingCartScreen;
