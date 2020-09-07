import React, { useState, useContext, useEffect, useRef } from 'react';
import FeatureItem from './FeatureItem';
import feature1 from '../../../images/featured/feature-1.jpg';
import feature2 from '../../../images/featured/feature-2.jpg'
import feature3 from '../../../images/featured/feature-3.jpg'
import feature4 from '../../../images/featured/feature-4.jpg'
import feature5 from '../../../images/featured/feature-5.jpg'
import feature6 from '../../../images/featured/feature-6.jpg'
import feature7 from '../../../images/featured/feature-7.jpg'
import feature8 from '../../../images/featured/feature-8.jpg'
import { GetItemContext } from '../../../context/GetItemContext';
import FeatureLi from './FeatureLi';
import mixitup from 'mixitup';

const Features = () => {
    const { item } = useContext(GetItemContext);
    const [active, setActive] = useState([]);
    const [activeTab, setActiveTab] = useState(1);
    const testRef01 = useRef(null)
    
    const handleClickTab = (id,name) => {
        setActiveTab(id)
        mixitup(testRef01.current);
        // mixer.filter(`${name.replace(/ +/g, "")}`)
    }
    const isActive = (id) => {
        return activeTab===id;
    }
    const renderFeatured = () => {
        return item.categories.map(item => {
            return <FeatureLi key={item.cateID} active={isActive} item={item} onActive={handleClickTab} />
        })
    }
    const renderItem = () => {
        // return item.products.filter(item => {
        //     return item.cate.includes(activeTab)
        // }).map(item2=>{
        //     return <FeatureItem activeTab={activeTab} itemft={item2} />
        // })
        return item.products.map(item1 => {
            return <FeatureItem allCate={item.categories} activeTab={activeTab} itemft={item1} />
        })
    }
    useEffect(() => {
        if (item.categories.length > 0) {
            setActive(new Array(item.categories.length).fill(false))
        }
    }, [item.categories])
    return (
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Featured Product</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                {/* <li className="active" data-filter="*">All</li> */}
                                
                                {
                                    renderFeatured()
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div ref={testRef01} className="row featured__filter">
                    {renderItem()}
                    {/* <FeatureItem activeTab={activeTab} id="10" img={feature1} categories="Vegetables 2" name="Crab Pool Security123" price="$30.00" />
                    <FeatureItem activeTab={activeTab} id="11" img={feature2} categories="Fastfood 3" name="Crab Pool Security456" price="$30.00" />
                    <FeatureItem activeTab={activeTab} id="1" img={feature1} categories="Vegetables FreshMeat" name="Crab Pool Security" price="$30.00" />
                    <FeatureItem activeTab={activeTab} id="2" img={feature2} categories="Vegetables FreshMeat" name="Crab Pool Security" price="$30.00" />
                    <FeatureItem activeTab={activeTab} id="3" img={feature3} categories="Vegetables fresh-meat" name="Crab Pool Security" price="$30.00" />
                    <FeatureItem activeTab={activeTab} id="4" img={feature4} categories="Fastfood oranges" name="Crab Pool Security" price="$30.00" />
                    <FeatureItem activeTab={activeTab} id="5" img={feature5} categories="vegetables fresh-meat" name="Crab Pool Security" price="$30.00" />
                    <FeatureItem activeTab={activeTab} id="6" img={feature6} categories="Oranges Fastfood" name="Crab Pool Security" price="$30.00" />
                    <FeatureItem activeTab={activeTab} id="7" img={feature7} categories="FreshMeat Vegetables" name="Crab Pool Security" price="$30.00" />
                    <FeatureItem activeTab={activeTab} id="8" img={feature8} categories="Fastfood vegetables" name="Crab Pool Security" price="$30.00" /> */}
                </div>
            </div>
        </section>
    );
}

export default Features;
