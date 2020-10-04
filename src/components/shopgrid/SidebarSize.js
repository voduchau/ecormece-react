import React from 'react';

const SidebarSize = () => {
    return (
        <div className="sidebar__item">
            <h4>Popular Size</h4>
            <div className="sidebar__item__size">
                <label>
                    Large
                    <input type="radio" id="large" />
                </label>
            </div>
            <div className="sidebar__item__size">
                <label>
                    Medium
                    <input type="radio" id="medium" />
                </label>
            </div>
            <div className="sidebar__item__size">
                <label>
                    Small
                    <input type="radio" id="small" />
                </label>
            </div>
            <div className="sidebar__item__size">
                <label>
                    Tiny
                    <input type="radio" id="tiny" />
                </label>
            </div>
        </div>
    );
}

export default SidebarSize;
