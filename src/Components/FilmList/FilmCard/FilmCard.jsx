import React from 'react'
import styles from './FilmCard.module.scss'
const FilmCard = (props) => {
        const {
            filmTitle,
            filmGenre,
            filmStreaming,
            filmReleaseDate,
            filmRuntime,
           } = props.films
    return (
        <div className={styles.cardWrapper}>
           
            <div className={styles.textWrapper}>
            <h3 className={styles.subheading}>{filmTitle} ({filmReleaseDate})</h3>
            <p className={styles.text}>{filmGenre}</p>
            <p className={styles.text}>{filmStreaming}</p>
            <p className={styles.text}>{filmRuntime}</p>
            </div>
            {/* <img src={img} alt="" className={styles.image}/> */}
        </div>
    )
}

export default FilmCard
