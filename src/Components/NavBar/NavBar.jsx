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
                <li>
            <select name="lysts" id="lists" className={styles.dropdown}>
            <option> Film Lyst</option> 
            <option> TV Lyst </option> 
           <option> Shared Lysts</option>
          </select>
                </li>
                <li>Usage Guide</li>
                <NavLink to="/" className={styles.navItem}><li><FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></li></NavLink>
            </ul>
        </div>
        </section>
        </>
    )
}

export default NavBar
