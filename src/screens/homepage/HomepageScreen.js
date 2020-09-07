import React from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/homepage/hero/Hero';
import Categories from '../../components/homepage/categories/Categories';
import Features from '../../components/homepage/features/Features';
import Banner from '../../components/homepage/banner/Banner';
import Latest from '../../components/homepage/latest/Latest';
import Blog from '../../components/homepage/blog/Blog';
import Footer from '../../components/footer/Footer';

const HomepageScreen = () => {
    return (
        <div className="homepagescreen">
            <Header />
            <Hero />
            <Categories />
            <Features />
            <Banner />
            <Latest />
            <Blog />
            <Footer />
        </div>
    );
}

export default HomepageScreen;
