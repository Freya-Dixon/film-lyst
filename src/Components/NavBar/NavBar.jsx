import React from 'react'
import styles from './NavBar.module.scss'
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
                <li>Joint Lysts</li>
                <li>View History</li>
            </ul>
        </div>
        </section>
        </>
    )
}

export default NavBar
