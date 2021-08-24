import React from 'react'
import FilmCard from './FilmCard'
import styles from './FilmList.module.scss'
import filmData from '../../assets/filmData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
const FilmList = () => {
    return (
        <>
        <div className={styles.filmListWrapper}>
        <h2 className={styles.subheading}>My Film Lyst <FontAwesomeIcon className={styles.icon} icon={faPlusSquare}></FontAwesomeIcon></h2> 
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
