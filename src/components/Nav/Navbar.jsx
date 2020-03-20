import React from "react";
import s from "./Nambar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <div className={s.nav}>
        <div className={s.item}>
            <NavLink to="/tasks-test/task1" activeClassName={s.activLink}>Task1</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/tasks-test/task2" activeClassName={s.activLink}>Task2</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/tasks-test/task3" activeClassName={s.activLink}>Task3,4</NavLink>
        </div>
    </div>
);

export default Navbar;