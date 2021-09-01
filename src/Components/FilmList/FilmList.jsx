import FilmCard from './FilmCard'
import React from 'react';
import styles from './FilmList.module.scss'
import InputModal from '../InputModal'
const FilmList = (props) => {

      const CardJSX = props.films.map((film) => {
    return <FilmCard films={film} setRefreshFilms={props.setRefreshFilms}/>
  })

    return (
        <>
        <div className={styles.filmList}> 
        <article>
        <div className={styles.iconContainer}>
        <h2 className={styles.filmList__title}>My Film Lyst </h2> 
        </div>
        <ul className={styles.filmListUl}> 
            <div className={styles.cardContainer}>
             {CardJSX}
             </div>
            </ul>
            </article>
        <InputModal  inputValue={props.inputValue} genreValue={props.genreValue} streamingValue={props.streamingValue} handleStreamingChange={props.handleStreamingChange}
        handlechange={props.handlechange} handleGenreChange={props.handleGenreChange} runTimeValue={props.runTimeValue}  handleTimeChange={props.handleTimeChange}/>  
        </div>
        </>
    )
}

export default FilmList
