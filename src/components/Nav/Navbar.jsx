import React from "react";
import s from "./Nambar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <div className={s.nav}>
        <div className={s.item}>
            <NavLink to="/task1" activeClassName={s.activLink}>Task1</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/task2" activeClassName={s.activLink}>Task2</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/task3" activeClassName={s.activLink}>Task3</NavLink>
        </div>
    </div>
);

export default Navbar;