import React from 'react';
import HeroCategory from './HeroCategory';
import HeroSearch from './HeroSearch';
import HeroItem from './HeroItem';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <HeroCategory />
                    <div className="col-lg-9">
                        <HeroSearch />
                        <HeroItem />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
