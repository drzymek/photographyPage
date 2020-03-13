import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Navigation.css";
import imgLogo from "../images/logo.jpg"

const menuList = [
    { name: "strona główna", path: "/", exact: true },
    { name: "o mnie", path: "/about" },
    { name: "galeria", path: "/gallery" },
    { name: "historie", path: "/stories" },
    { name: "kontakt", path: "/contact" }
]


const scrollToPage = () => {
    const pageFromTop = document.querySelector('.navScrollToPage').offsetTop;
    window.scroll({
        top: pageFromTop,
        behavior: 'smooth'
    })
}


const Navigation = () => {

    const menu = menuList.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} className={item.className} onClick={scrollToPage} >{item.name}</NavLink>
        </li>
    ))
    return (
        <div className="navigation">
            <span className="logo">
                <img src={imgLogo} alt="logo circle of life" />
            </span>
            <nav>
                <ul>
                    {menu}
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;