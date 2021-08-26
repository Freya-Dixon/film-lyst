import FilmCard from './FilmCard'
import React from 'react';
import {
    NavLink
   } from "react-router-dom";
import styles from './FilmList.module.scss'
import filmData from '../../assets/filmData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import InputModal from '../InputModal'
const FilmList = (props) => {

      const CardJSX = props.films.map((film) => {
    return <FilmCard films={film}/>
  })

    return (
        <>
        <div className={styles.filmListWrapper}> 
        <article>
        <div className={styles.iconContainer}>
        <h2 className={styles.subheading}>My Film Lyst </h2> 
        <FontAwesomeIcon className={styles.icon} icon={faPlusSquare} id="fetchData" ></FontAwesomeIcon>
        <FontAwesomeIcon className={styles.iconEdit} icon={faEdit}></FontAwesomeIcon>
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
