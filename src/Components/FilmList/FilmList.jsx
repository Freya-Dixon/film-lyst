import FilmCard from './FilmCard'
import React, {useState, useEffect} from 'react';
import {
    NavLink
   } from "react-router-dom";
import styles from './FilmList.module.scss'
import filmData from '../../assets/filmData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import InputModal from '../InputModal'
const FilmList = (props) => {

    const [items, setItems] = useState([
        { newFilmItem: 'film 1', quantity: 1, isSelected: false },
        { newFilmItem: 'film 2', quantity: 3, isSelected: true },
        { newFilmItem: 'film 3', quantity: 2, isSelected: false },
    ]);

    const handleAddButtonClick = () => {
        const newItem = {
            filmName: props.inputValue,
            genre: props.genreValue,
            streamingService: props.streamingValue,
            runTime: props.runTimeValue,
            quantity: 1,
            isSelected: false,
        };
    }


    return (
        <>
        <div className={styles.filmListWrapper}> 
        <h2 className={styles.subheading}>My Film Lyst <FontAwesomeIcon className={styles.icon} icon={faPlusSquare}></FontAwesomeIcon></h2> 
        <InputModal  inputValue={props.inputValue} genreValue={props.genreValue} streamingValue={props.streamingValue} handleStreamingChange={props.handleStreamingChange}
        handlechange={props.handlechange} handleGenreChange={props.handleGenreChange} runTimeValue={props.runTimeValue}  handleTimeChange={props.handleTimeChange}/>  
            <ul className={styles.filmListUl}> 
            <FilmCard filmData={filmData[0]}/>  
            <FilmCard filmData={filmData[2]}/>    
            <FilmCard filmData={filmData[3]}/>  
            <FilmCard filmData={filmData[5]}/>   
            <FilmCard filmData={filmData[6]}/>   
            <FilmCard filmData={filmData[7]}/>        
            </ul>
        </div>
        </>
    )
}

export default FilmList
