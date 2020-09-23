import React from 'react';

const SidebarColor = () => {
    return (
        <div className="sidebar__item sidebar__item__color--option">
            <h4>Colors</h4>
            <div className="sidebar__item__color sidebar__item__color--white">
                <label>
                    White
                                    <input type="radio" id="white" />
                </label>
            </div>
            <div className="sidebar__item__color sidebar__item__color--gray">
                <label>
                    Gray
                                    <input type="radio" id="gray" />
                </label>
            </div>
            <div className="sidebar__item__color sidebar__item__color--red">
                <label>
                    Red
                                    <input type="radio" id="red" />
                </label>
            </div>
            <div className="sidebar__item__color sidebar__item__color--black">
                <label>
                    Black
                                    <input type="radio" id="black" />
                </label>
            </div>
            <div className="sidebar__item__color sidebar__item__color--blue">
                <label>
                    Blue
                                    <input type="radio" id="blue" />
                </label>
            </div>
            <div className="sidebar__item__color sidebar__item__color--green">
                <label>
                    Green
                                    <input type="radio" id="green" />
                </label>
            </div>
        </div>
    );
}

export default SidebarColor;
