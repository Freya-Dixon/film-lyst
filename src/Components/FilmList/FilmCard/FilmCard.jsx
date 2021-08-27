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
        <div className={styles.cardWrapper}>
            <button onClick={deleteFilm} className={styles.submitButton}> <FontAwesomeIcon className={styles.icon} icon={faMinusSquare} id="deleteData" ></FontAwesomeIcon></button>
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
