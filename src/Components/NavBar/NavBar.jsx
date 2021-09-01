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
        <section className={styles.section}>
        <div className={styles.nav}>
            <ul className={styles.nav__list}>
                <li><h2>Reel Lyst</h2></li>
            <NavLink to="/filmLyst" className={styles.nav__list__item}><li>My Lyst</li></NavLink>
                <NavLink to="/usageGuide" target="_blank" className={styles.nav__list__item}><li>Usage Guide</li></NavLink>
                <NavLink to="/" className={styles.nav__list__item}><li><FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></li></NavLink>
            </ul>
        </div>
        </section>
        </>
    )
}

export default NavBar
