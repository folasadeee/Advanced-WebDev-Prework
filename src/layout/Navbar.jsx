import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import styles from './Navbar.module.css';
import logo from './../assets/images/sparkles.svg';

const Navbar = () => {
    return (
        <>
        <nav className={styles.navBar}>
<div class={styles.logoContainer}>
<img src={logo} className={styles.navBarLogo}/>
<Link
to="/">
    <span class={styles.logoText}>Creatorverse</span>
    </Link>
    </div>
        <div className="links">
            <a href="/">Home</a>
            <a href="/add">Add</a>
        </div>
        </nav>

        <Outlet />
        </>
    );
}

export default Navbar;