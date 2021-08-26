import React from 'react'
import styles from './HomeLandingPage.module.scss'
import NavBar from '../../Components/NavBar'
const HomeLandingPage = () => {
    return (
        <>
       <section className={styles.homeContainer}>
        <article className={styles.homeImageCard}>
            <div className={styles.imageContainer}>
            <div className={styles.loginWrapper}>
                <div className={styles.inputWrapper}>
                    <h2 className={styles.subheading}>Login</h2>
                <label htmlFor="" className={styles.inputLabel}>Email</label>
                <input type="text"className={styles.textInput} />
                <label htmlFor=""  className={styles.inputLabel}>Password</label>
                <input type="password" className={styles.textInput} />
                <button className={styles.userEnterButton}>Enter</button>
                </div>

            </div>
            <h1 className={styles.heading}>Reel Lyst</h1>
            </div>

        </article>
       </section>

   </>
    )
}

export default HomeLandingPage
