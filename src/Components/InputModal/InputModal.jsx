import React from 'react'
import styles from './InputModal.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
const InputModal = (props) => {
    return (
        <section >
            <form action="" className={styles.modalWrapper}>
             <h3 className={styles.heading}>Add a film <FontAwesomeIcon className={styles.icon} icon={faPlusSquare}></FontAwesomeIcon> </h3>
                <label htmlFor=""> Film Name </label>
                <input type="text" className={styles.textInput} placeholder="Film" onChange={props.handlechange} />
                <label htmlFor=""> Genre </label>
           <select name="genres" id="genres" className={styles.dropdown} onChange={props.handleGenreChange}>
           <option value="drama" onChange={props.handleChange}> Drama </option>
           <option value="comedy">Comedy</option>
           <option value="sciFi">Sci-Fi</option>
           <option value="animation">Animation</option>
           <option value="romance">Romance</option>
           <option value="musical">Musical</option>
           <option value="horror">Horror</option>
           <option value="western">Western</option>
           <option value="thriller">Thriller</option>
           <option value="documentary">Documentary</option>
           </select>


           <label htmlFor=""> Streaming Service </label>
           <select name="streaming" id="steaming" className={styles.dropdown} onChange={props.handleStreamingChange} >
           <option value="netflix">Netflix</option>
           <option value="amazonPrime">Amazon Prime</option>
           <option value="nowTv">Now Tv</option>
           <option value="disneyPlus">Disney +</option>
           <option value="bfiPlayer">BFI Player</option>
           <option value="mubi">Mubi</option>
           <option value="iplayer">Iplayer</option>
           </select>
      
                <label htmlFor=""> Run Time </label>
                <input type="time" min="00:00" max="05:00" className={styles.time} onChange={props.handleTimeChange}/>
        
            </form>
        </section>
    )
}

export default InputModal
