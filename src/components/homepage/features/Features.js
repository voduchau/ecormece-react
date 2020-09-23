import React, { useState, useContext, useEffect, useRef } from 'react';
import FeatureItem from './FeatureItem';
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
        return item.products.map(item1 => {
            return <FeatureItem key={item1.productID} allCate={item.categories} activeTab={activeTab} itemft={item1} />
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
                </div>
            </div>
        </section>
    );
}

export default Features;
