import React from 'react';

const ProductDetailTab = ({ item, isActive, handleChangeTab }) => {

    return (
        <div className="col-lg-12">
            <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className={`nav-link-details nav-link ${isActive[0] ? 'active' : null}`} onClick={() => handleChangeTab(0)} data-toggle="tab" role="tab"
                            aria-selected="true">Description</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link-details nav-link ${isActive[1] ? 'active' : null}`} onClick={() => handleChangeTab(1)} data-toggle="tab" role="tab"
                            aria-selected="false">Information</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link-details nav-link ${isActive[2] ? 'active' : null}`} onClick={() => handleChangeTab(2)} data-toggle="tab" role="tab"
                            aria-selected="false">Reviews <span>(1)</span></a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className={`tab-pane ${isActive[0] ? 'active' : null}`} id="tabs-1" role="tabpanel">
                        <div className="product__details__tab__desc">
                            <h6>Products Discription</h6>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className={`tab-pane ${isActive[1] ? 'active' : null}`} id="tabs-2" role="tabpanel">
                        <div className="product__details__tab__desc">
                            <h6>Products Infomation</h6>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                            Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                            sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                            eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                            sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                            diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                        Proin eget tortor risus.</p>
                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                            elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                            porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                        </div>
                    </div>
                    <div className={`tab-pane ${isActive[2] ? 'active' : null}`} id="tabs-3" role="tabpanel">
                        <div className="product__details__tab__desc">
                            <h6>Products Infomation</h6>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                            Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                            sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                            eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                            sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                            diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                        Proin eget tortor risus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailTab;
