import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { GetItemContext } from '../../../context/GetItemContext';

const HeroSearch = () => {
    const [searchText, setSearchText] = useState('')
    const { FilterItem } = useContext(GetItemContext)
    let history = useHistory();

    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/shop-grid',
            search: `?search=${searchText}`,
            state: { searchText: searchText }
        })
        // FilterItem([0, 100], searchText)
    }
    return (
        <div className="hero__search">
            <div className="hero__search__form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="hero__search__categories">
                        All Categories
                                    <span className="arrow_carrot-down"></span>
                    </div>
                    <input
                        type="text"
                        value={searchText}
                        placeholder="What do yo u need?"
                        onChange={(e) => handleSearch(e)}
                    />
                    <button type="submit" className="site-btn">SEARCH</button>
                </form>
            </div>
            <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                </div>
                <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                </div>
            </div>
        </div>
    );
}

export default HeroSearch;
