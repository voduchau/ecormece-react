import React from 'react';
import './DashBoardScreen.css'
import MenuDashBoard from '../../components/admin/MenuDashBoard';

const DashBoardScreen = () => {
    return (
        <div className="dashboard">
            <MenuDashBoard />
            <div className="dashboard__content">
                content
            </div>
        </div>
    );
}

export default DashBoardScreen;
