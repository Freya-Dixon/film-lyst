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
            filmId
           } = props.films

           const deleteFilm = () => {
            fetch(`http://localhost:8080/film/${filmId}`, {
              method: 'DELETE', 
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
              }),
            })
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
              props.setRefreshFilms()
            })
            .catch((error) => {
              console.error('Error:', error);
            })
          }


    return (
        <div className={styles.card}>
            <button onClick={deleteFilm} className={styles.card__btn}> <FontAwesomeIcon className={styles.card__icon} icon={faMinusSquare} id="deleteData" ></FontAwesomeIcon></button>
            <div className={styles.textWrapper}>
            <h3 className={styles.card__title}>{filmTitle} ({filmReleaseDate})</h3>
            <p className={styles.card__text}>{filmGenre}</p>
            <p className={styles.card__text}>{filmStreaming}</p>
            <p className={styles.card__text}>{filmRuntime}</p>
            </div>
            <img src={filmImage} alt="" className={styles.card__image}/>
        </div>
    )
}

export default FilmCard
