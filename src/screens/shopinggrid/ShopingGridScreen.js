import React from 'react'
import Header from '../../components/header/Header';
import HeroCategory from '../../components/homepage/hero/HeroCategory';
import HeroSearch from '../../components/homepage/hero/HeroSearch';
import ShopGridContent from '../../components/shopgrid/ShopGridContent';
import BreadCrumb from '../../components/shared/BreadCrumb';

const ShopingGridScreen = () => {
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
            <BreadCrumb title="shop" />
            <ShopGridContent />
        </>
    );
}

export default ShopingGridScreen;
