import React from 'react'
import styles from './FilmCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
const FilmCard = (props) => {
        const {
            filmTitle,
            filmGenre,
            filmStreaming,
            filmReleaseDate,
            filmRuntime,
            filmImage,
           } = props.films
    return (
        <div className={styles.cardWrapper}>
                        <FontAwesomeIcon className={styles.icon} icon={faMinusSquare} id="deleteData" ></FontAwesomeIcon>
            <div className={styles.textWrapper}>
            <h3 className={styles.subheading}>{filmTitle} ({filmReleaseDate})</h3>
            <p className={styles.text}>{filmGenre}</p>
            <p className={styles.text}>{filmStreaming}</p>
            <p className={styles.text}>{filmRuntime}</p>
            </div>
            <img src={filmImage} alt="" className={styles.image}/>
        </div>
    )
}

export default FilmCard
