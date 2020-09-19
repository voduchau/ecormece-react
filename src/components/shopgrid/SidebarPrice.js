import React from 'react';

const SidebarPrice = () => {
    console.log('ve')
    return (
        <div class="sidebar__item">
            <h4>Price</h4>
            <div class="price-range-wrap">
                <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="10" data-max="540">
                    <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                    <span class="ui-slider-handle ui-corner-all ui-state-default" onClick={()=>console.log('x')}></span>
                    <span class="ui-slider-handle ui-corner-all ui-state-default" onClick={()=>console.log('x')}></span>
                </div>
                <div class="range-slider">
                    <div class="price-input">
                        <input type="text" id="minamount" onChange={(e)=>console.log(e.target.value,'value')} />
                        <input type="text" id="maxamount" onChange={(e)=>console.log(e.target.value,'value')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarPrice;
