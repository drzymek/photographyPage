import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Navigation.css";
import imgLogo from "../images/newLogo.png";

const menuList = [
    { name: "strona główna", path: "/", exact: true },
    { name: "o mnie", path: "/o_mnie" },
    { name: "galeria", path: "/galerie" },
    { name: "historie", path: "/historie" },
    { name: "kontakt", path: "/kontakt" }
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
        <>
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
            {/* <div className="mobile burger">
                <i class="fas fa-bars" ></i>
                <i class="fas fa-times off" ></i>
            </div>
            <nav className="mobileNav">
                <ul>
                    {menu}
                </ul>
            </nav> */}
        </>
    );
}

export default Navigation;