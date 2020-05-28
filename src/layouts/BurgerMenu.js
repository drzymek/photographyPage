import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import '../css/BurgerMenu.css';

const menuList = [
    { name: "strona główna", path: "/", exact: true, className: "menu-item", id: "home" },
    { name: "o mnie", path: "/o_mnie", className: "menu-item", id: "about" },
    { name: "galeria", path: "/galerie", className: "menu-item", id: "galleries" },
    { name: "historie", path: "/historie", className: "menu-item", id: "stories" },
    { name: "kontakt", path: "/kontakt", className: "menu-item", id: "contact" }
]

const scrollToPage = () => {
    const pageFromTop = document.querySelector('.navScrollToPage').offsetTop;
    window.scroll({
        top: pageFromTop,
        behavior: 'smooth'
    })
}

const menu = menuList.map(item => (
    <li key={item.name}>
        <NavLink to={item.path} className={item.className} id={item.id} onClick={scrollToPage} >{item.name}</NavLink>
    </li>
))

class BurgerMenu extends Component {
    showSettings(e) {
        e.preventDefault();
    }
    render() {
        return (
            <Menu className="burgerMenu" width={'30 %'}>
                {menu}
            </Menu >
        );
    }
}

export default BurgerMenu;