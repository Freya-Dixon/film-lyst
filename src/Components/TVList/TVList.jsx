import React from 'react'
import FilmCard from '../../Components/FilmList/FilmCard'
import styles from './TVList.module.scss'
import filmData from '../../assets/filmData'
import NavBar from '../NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const TVList = () => {
    return (
        <>
        <NavBar />
        <div className={styles.filmListWrapper}>
        <h2 className={styles.subheading}>My TV Lyst <FontAwesomeIcon className={styles.icon} icon={faPlusSquare}></FontAwesomeIcon></h2> 
            <ul className={styles.filmListUl}> 
            <FilmCard filmData={filmData[0]}/>        
            </ul>
        </div>
        </>
    )
}

export default TVList
