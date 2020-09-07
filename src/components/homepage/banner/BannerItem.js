import React from 'react';

const BannerItem = ({img}) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="banner__pic">
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default BannerItem;
