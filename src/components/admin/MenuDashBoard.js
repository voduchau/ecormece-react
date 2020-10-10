import React, { useEffect, useState } from 'react';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CategoryIcon from '@material-ui/icons/Category';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import GroupIcon from '@material-ui/icons/Group';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from "react-router-dom";

const MenuDashBoard = ({ active }) => {
    const [isActive, setIsActive] = useState([false, false, false, false, false])


    useEffect(() => {
        let temp = [false, false, false, false, false]
        temp[active] = true
        setIsActive(temp)
    }, [])

    const handleChangeTab = (tab) => {
        let temp = [false, false, false, false, false]
        temp[tab] = true
        setIsActive(temp)
    }
    return (
        <div className="dashboard__menu">
            <h3 className="dashboard__menu-h3">DASHBOARD</h3>
            <nav className="dashboard__menu-nav">
                <ul className="dashboard__menu-nav-ul">

                    <li className={`dashboard_meunu-item ${isActive[0] ? 'active' : null}`} onClick={() => handleChangeTab(0)}>
                        <Link>
                            <GroupIcon />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li className={`dashboard_meunu-item ${isActive[1] ? 'active' : null}`} onClick={() => handleChangeTab(0)}>
                        <Link to="/dashboard/products">
                            <EventNoteIcon />
                            <span>Products</span>
                        </Link>
                    </li>
                    <li className={`dashboard_meunu-item ${isActive[2] ? 'active' : null}`} onClick={() => handleChangeTab(1)}>
                        <CategoryIcon />
                        <span>Categories</span>
                    </li>
                    <li className={`dashboard_meunu-item ${isActive[3] ? 'active' : null}`} onClick={() => handleChangeTab(2)}>
                        <LocalShippingIcon />
                        <span>Order</span>
                    </li>
                    <li className={`dashboard_meunu-item ${isActive[4] ? 'active' : null}`} onClick={() => handleChangeTab(3)}>
                        <CreateIcon />
                        <span>Blogs</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MenuDashBoard;
