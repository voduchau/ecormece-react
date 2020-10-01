import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import HeroCategory from '../../components/homepage/hero/HeroCategory';
import HeroSearch from '../../components/homepage/hero/HeroSearch';
import BreadCrumb from '../../components/shopingcart/BreadCrumb';
import ShopDetailContent from '../../components/shopdetail/ShopDetailContent';
import Footer from '../../components/footer/Footer';
import { useLocation } from "react-router-dom";

const ShopDetailScreen = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 200);
      }, [pathname]);

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
            <ShopDetailContent />
            <Footer />
        </>
     );
}
 
export default ShopDetailScreen;
