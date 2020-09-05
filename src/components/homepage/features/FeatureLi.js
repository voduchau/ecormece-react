import React from 'react';

const FeatureLi = ({active,item, onActive}) => {
    return ( 
        <li className="feature_li" onClick={() => onActive(item.cateID, item.cateName)} data-filter={`.${item.cateName.replace(/ +/g, "")}`}>{item.cateName}</li>
     );
}
 
export default FeatureLi;
