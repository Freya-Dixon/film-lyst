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

    // const [items, setItems] = useState([
    //     { newFilmItem: 'film 1', quantity: 1, isSelected: false },
    //     { newFilmItem: 'film 2', quantity: 3, isSelected: true },
    //     { newFilmItem: 'film 3', quantity: 2, isSelected: false },
    // ]);

    // const handleAddButtonClick = () => {
    //     const newItem = {
    //         filmName: props.inputValue,
    //         genre: props.genreValue,
    //         streamingService: props.streamingValue,
    //         runTime: props.runTimeValue,
    //         quantity: 1,
    //         isSelected: false,
    //     };
    // }


    return (
        <>
        <div className={styles.filmListWrapper}> 
        <div className={styles.iconContainer}>
        <h2 className={styles.subheading}>My Film Lyst </h2> 
        <FontAwesomeIcon className={styles.icon} icon={faPlusSquare}></FontAwesomeIcon>
        <FontAwesomeIcon className={styles.iconEdit} icon={faEdit}></FontAwesomeIcon>
        </div>
        <InputModal  inputValue={props.inputValue} genreValue={props.genreValue} streamingValue={props.streamingValue} handleStreamingChange={props.handleStreamingChange}
        handlechange={props.handlechange} handleGenreChange={props.handleGenreChange} runTimeValue={props.runTimeValue}  handleTimeChange={props.handleTimeChange}/>  
            <ul className={styles.filmListUl}> 
            <div className={styles.cardContainer}>
             {CardJSX}
        </div>
            </ul>
        </div>
        </>
    )
}

export default FilmList
