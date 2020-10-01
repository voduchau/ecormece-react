import React, { useContext, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { GetItemContext } from '../../context/GetItemContext';
import { useEffect } from 'react';
import { useParams, useLocation, useHistory } from "react-router-dom";

const marks = [
    {
      value: 0,
      label: '$0',
    },
    {
      value: 100,
      label: '$100',
    },
  ];
const SidebarPrice = () => {
    const {item, FilterItem} = useContext(GetItemContext)
    const [value, setValue] = useState([0, 100]);
    let history = useHistory();
    const handleChange = (event, newValue) => {
        setValue(newValue);
        FilterItem(value);
    };
    useEffect(()=>{
        FilterItem(value,history.location.state.searchText);
    },[])
    return (
        <div className="price_range">
            <Typography id="range-slider" gutterBottom>
                <div id="range-slider-h3">Price</div>
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                marks={marks}
                aria-labelledby="range-slider"
                color="red"
            />
            <div className="range-slider">
                <div className="range-slider-min">${value[0]}</div>
                <div>-</div>
                <div className="range-slider-max">${value[1]}</div>
            </div>
        </div>
    );
}

export default SidebarPrice;
