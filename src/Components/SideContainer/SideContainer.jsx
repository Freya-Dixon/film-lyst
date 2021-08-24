import React from 'react'
import styles from './SideContainer.module.scss'
import filmData from '../../assets/filmData'
import InputModal from '../InputModal'
const SideContainer = () => {
    return (
        <>
        <div className={styles.containerWrapper}>
            <div className={styles.containerWrapper}>
            <h2 className={styles.subheading}>This week's Lyst</h2>
            <h2 className={styles.subheading}>{filmData[4].name}</h2>
                <img src={filmData[4].img} alt="" className={styles.image}/>
                <p className={styles.text}>{filmData[4].genre}</p>
                <p className={styles.text}>{filmData[4].streaming}</p>
                <p className={styles.text}>{filmData[4].runTime}</p>
            </div>
            <div className={styles.containerWrapper}>
            <h2 className={styles.subheading}></h2>
            <h2 className={styles.subheading}>{filmData[1].name}</h2>
                <img src={filmData[1].img} alt="" className={styles.image}/>
                <p className={styles.text}>{filmData[1].genre}</p>
                <p className={styles.text}>{filmData[1].streaming}</p>
                <p className={styles.text}>{filmData[1].runTime}</p>
            </div>
            <InputModal />
        </div>
        </>
    )
}

export default SideContainer
