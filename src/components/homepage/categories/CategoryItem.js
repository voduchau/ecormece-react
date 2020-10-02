import React from 'react';

const CategoryItem = ({ item, categoryName, image }) => {
    return (
        <div className="col-lg-10">
            <div className="categories__item set-bg" style={{backgroundImage: `url(${image})`}}>
                <h5><a href="/#">{categoryName}</a></h5>
            </div>
        </div>
    );
}

export default CategoryItem;
