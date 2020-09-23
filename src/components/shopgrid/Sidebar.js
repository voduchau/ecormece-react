import React from 'react';
import LatestItemSlider from '../homepage/latest/LatestItemSlider';
import SidebarColor from './SidebarColor';
import SidebarPrice from './SidebarPrice';
import SidebarSize from './SidebarSize';
import lp1 from '../../images/latest-product/lp-1.jpg'
const Sidebar = () => {
    return ( 
        <div className="col-lg-3 col-md-5">
                        <div className="sidebar">
                            <div className="sidebar__item">
                                <h4>Department</h4>
                                <ul>
                                    <li><a href="/#">Fresh Meat</a></li>
                                    <li><a href="/#">Vegetables</a></li>
                                    <li><a href="/#">Fruit & Nut Gifts</a></li>
                                    <li><a href="/#">Fresh Berries</a></li>
                                    <li><a href="/#">Ocean Foods</a></li>
                                    <li><a href="/#">Butter & Eggs</a></li>
                                    <li><a href="/#">Fastfood</a></li>
                                    <li><a href="/#">Fresh Onion</a></li>
                                    <li><a href="/#">Papayaya & Crisps</a></li>
                                    <li><a href="/#">Oatmeal</a></li>
                                </ul>
                            </div>
                            <SidebarPrice />
                            <SidebarColor />
                            <SidebarSize />
                            <div className="sidebar__item">
                                <div className="latest-product__text">
                                    <h4>Latest Products</h4>
                                    <div className="latest-product__slider owl-carousel">
                                        <div className="latest-prdouct__slider__item">
                                            <LatestItemSlider name="product01" price={20} img={lp1} />
                                            <LatestItemSlider name="product01" price={20} img={lp1} />
                                            <LatestItemSlider name="product01" price={20} img={lp1} />
                                        </div>
                                        <div className="latest-prdouct__slider__item">
                                            <LatestItemSlider name="product01" price={20} img={lp1} />
                                            <LatestItemSlider name="product01" price={20} img={lp1} />
                                            <LatestItemSlider name="product01" price={20} img={lp1} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
     );
}
 
export default Sidebar;
