import React, { Component } from 'react'
import breadcrumb from '../../images/breadcrumb.jpg';


const BreadCrumb = () => {
    return ( 
        <section class="breadcrumb-section set-bg" data-setbg={breadcrumb} style={{backgroundImage: `url(${breadcrumb})`}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="breadcrumb__text">
                            <h2>Shopping Cart</h2>
                            <div class="breadcrumb__option">
                                <a href="./index.html">Home</a>
                                <span>Shopping Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default BreadCrumb;
