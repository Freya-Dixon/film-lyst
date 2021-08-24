import React from 'react'
import styles from './FilmCard.module.scss'
const FilmCard = (props) => {
        const {
            name,
            genre,
            img,
            streaming,
            runTime
           } = props.filmData
    return (
        <div className={styles.cardWrapper}>
           
            <div className={styles.textWrapper}>
            <h3 className={styles.subheading}>{name}</h3>
            <p className={styles.text}>{genre}</p>
            <p className={styles.text}>{streaming}</p>
            <p className={styles.text}>{runTime}</p>
            </div>
            <img src={img} alt="" className={styles.image}/>
        </div>
    )
}

export default FilmCard
