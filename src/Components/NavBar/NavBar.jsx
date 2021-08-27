import React from 'react'
import styles from './NavBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import {
    NavLink
  } from "react-router-dom";
const NavBar = () => {
    return (
        <>
        <section className={styles.sectionWrapper}>
        <div className={styles.navWrapper}>
            <ul className={styles.navList}>
                <li><h2>Reel Lyst</h2></li>
            <NavLink to="/filmLyst" className={styles.navItem}><li>My List</li></NavLink>
                <NavLink to="/usageGuide" className={styles.navItem}><li>Usage Guide</li></NavLink>
                <NavLink to="/" className={styles.navItem}><li><FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></li></NavLink>
            </ul>
        </div>
        </section>
        </>
    )
}

export default NavBar
