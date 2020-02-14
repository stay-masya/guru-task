import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import {Nav} from "react-bootstrap";

const Navbar = () => {
    return (
        <Nav className={`${s.nav} flex-column `}>
            <NavLink to="/"><img className={s.icon} src="home.svg" alt=""/></NavLink>
            <NavLink to="/team"><img className={s.icon} src="group.svg" alt=""/></NavLink>
            <NavLink to="/project"><img className={s.icon} src="start-up.svg" alt=""/></NavLink>
            <NavLink to="/contact"> <img className={s.icon} src="contact.svg" alt=""/></NavLink>
        </Nav>
    )
};
export default Navbar
