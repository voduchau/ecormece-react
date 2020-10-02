import React from 'react';

const SidebarSize = () => {
    return (
        <div className="sidebar__item">
            <h4>Popular Size</h4>
            <div className="sidebar__item__size">
                <label for="large">
                    Large
                                    <input type="radio" id="large" />
                </label>
            </div>
            <div className="sidebar__item__size">
                <label for="medium">
                    Medium
                                    <input type="radio" id="medium" />
                </label>
            </div>
            <div className="sidebar__item__size">
                <label for="small">
                    Small
                                    <input type="radio" id="small" />
                </label>
            </div>
            <div className="sidebar__item__size">
                <label for="tiny">
                    Tiny
                                    <input type="radio" id="tiny" />
                </label>
            </div>
        </div>
    );
}

export default SidebarSize;
