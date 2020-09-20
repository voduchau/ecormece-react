import React, { useState } from 'react';
import InputRange from 'react-input-range';

const SidebarPrice = () => {
    const [value, setValue] = useState({ min: 0, max: 10 });

    const handleChangeMin = (e) => {
        setValue({...value,min: e.target.value});
    }
    const handleChangeMax = (e) => {
        setValue({...value,max: e.target.value});
        console.log(value)
    }

    return (
        <div className="input_slider">
            <input
                id="input_slider_min"
                type="range"
                min="0"
                max="20"
                value={value.min}
                onChange={(e) => handleChangeMin(e)}
                step="1" />
            <input
                id="input_slider_max"
                type="range"
                min="0"
                max="20"
                value={value.max}
                onChange={(e) => handleChangeMax(e)}
                step="1" />
        </div>
    );
    // <InputRange
    //     maxValue={100}
    //     minValue={0}
    //     className="sliderContainer1"
    //     value={value}
    //     ariaControls
    //     ariaLabelledby
    //     allowSameValues={true}
    //     draggableTrack={true}
    //     formatLabel={value => `${value}cm`}
    //     onChange={value => handleChangeValue(value)} />
    // <div class="sidebar__=item">
    //     <h4>Price</h4>
    //     <div class="price-range-wrap">
    //         {/* <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="10" data-max="540">
    //             <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
    //             <span class="ui-slider-handle ui-corner-all ui-state-default" onClick={() => console.log('x')}></span>
    //             <span class="ui-slider-handle ui-corner-all ui-state-default" onClick={() => console.log('x')}></span>
    //         </div> */}
    //         <InputRange
    //             maxValue={20}
    //             minValue={0}
    //             value={value}
    //             onChange={value => setValue({ value })} />
    //         <div class="range-slider">
    //             <div class="price-input">
    //                 <input type="text" id="minamount" onChange={(e) => console.log(e.target.value, 'value')} />
    //                 <input type="text" id="maxamount" onChange={(e) => console.log(e.target.value, 'value')} />
    //             </div>
    //         </div>
    //     </div>
    // </div>
}

export default SidebarPrice;
