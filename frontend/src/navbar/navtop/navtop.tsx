import React from "react";
import { NavLink } from "react-router-dom";

import './navtop.css'
let Navbar = () => {
    return (
        <div className="header-top">
            <div className="header-top-container">
                <div className="header-top-menu">
                    <ul className="header-top-menu-list">
                        <li className="header-top-menu-item">
                            <NavLink to="/">Главная</NavLink>
                        </li>
                        <li className="header-top-menu-item">
                            <NavLink to="/sale">Акции</NavLink>
                        </li>
                        <li className="header-top-menu-item">
                            <NavLink to="/smartphones">Смартфоны</NavLink>
                        </li>
                        <li className="header-top-menu-item">
                            <NavLink to="/home-electronics">Техника для дома</NavLink>
                        </li>
                        <li className="header-top-menu-item">
                            <NavLink to="/audio">Аудио</NavLink>
                        </li>
                        <li className="header-top-menu-item">
                            <NavLink to="/video_technika">Видео техника</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar