import styles from './InputModal.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import React, {useState, useEffect} from 'react';
const InputModal = (props) => {
    
    const [inputValue, setInputValue] = useState("")
    const [genreValue, setGenreValue] = useState("")
    const [streamingValue, setStreamingValue] = useState("")
    const [runTimeValue, setRunTimeValue] = useState("")
    const [filmReleaseValue, setfilmReleaseValue] = useState("")
    const [filmImageValue, setfilmImageValue] = useState("")

    const handlechange = (e) => {
        setInputValue(e.target.value)
      }
    
      const handleGenreChange = (e) => {
        setGenreValue(e.target.value)
      }
    
      const handleStreamingChange = (e) => {
        setStreamingValue(e.target.value)
      }
      
      const handleTimeChange = (e) => {
        setRunTimeValue(e.target.value)
      }
    
      const handleDateChange = (e) => {
        setfilmReleaseValue(e.target.value)
      }


      const handleImageChange = (e) => {
        setfilmImageValue(e.target.value)
      }
    const postFilm = (e) => {
        fetch('http://localhost:8080/film', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            filmTitle: inputValue,
            filmGenre: genreValue,
            filmStreaming: streamingValue,
            filmReleaseDate: filmReleaseValue,
            filmRuntime: runTimeValue,
            filmImage: filmImageValue,
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        })
      }
    return (
        <section >
            <form onSubmit={postFilm} className={styles.modalWrapper}>
                <div className={styles.headingWrapper}>
             <h3 className={styles.heading}>Add a film </h3>
             <button type="submit" className={styles.submitButton}><FontAwesomeIcon className={styles.icon} icon={faPlusSquare}></FontAwesomeIcon></button>
             </div>
                <label htmlFor=""> Film Name </label>
                <input type="text" className={styles.textInput} placeholder="Film" onChange={handlechange} />
 
            <div className={styles.dropdownContainer}>
 
           <div>
           <label htmlFor=""> Genre </label>
           <select name="genres" id="genres" className={styles.dropdown} onChange={handleGenreChange}>
           <option value="Drama"> Drama </option>
           <option value="Comedy">Comedy</option>
           <option value="SciFi">Sci-Fi</option>
           <option value="Animation">Animation</option>
           <option value="Romance">Romance</option>
           <option value="Musical">Musical</option>
           <option value="Horror">Horror</option>
           <option value="Western">Western</option>
           <option value="Thriller">Thriller</option>
           <option value="Documentary">Documentary</option>
           </select>
           </div>

           <div>
           <label htmlFor="">Streaming </label>
           <select name="streaming" id="steaming" className={styles.dropdown} onChange={handleStreamingChange} >
           <option value="Netflix">Netflix</option>
           <option value="AmazonPrime">Amazon Prime</option>
           <option value="Now-Tv">Now Tv</option>
           <option value="Disney Plus">Disney +</option>
           <option value="BFI Player">BFI Player</option>
           <option value="Mubi">Mubi</option>
           <option value="I Player">Iplayer</option>
           </select>
           </div>
           </div>
       <div className={styles.inputContainer}>
           <div>
           <label htmlFor=""> Release Year </label>
           <input type="text" className={styles.time} onChange={handleDateChange}/>
           </div>
           <div>
                <label htmlFor=""> Run Time </label>
                <input type="time" min="00:00" max="05:00" className={styles.time} onChange={handleTimeChange}/>
                </div>
                </div>
                <label htmlFor=""> Set Image </label>
           <input type="text" className={styles.textInput} onChange={handleImageChange}/>
            </form>
        </section>
    )
}

export default InputModal
