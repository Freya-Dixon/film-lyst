
import FilmCard from '../../Components/FilmList/FilmCard'
import styles from './TVList.module.scss'
import filmData from '../../assets/filmData'
import InputModal from '../../Components/InputModal'
import NavBar from '../NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const TVList = (props) => {
   
    return (
        <>
        <NavBar />
        <div className={styles.filmListWrapper}>
        <div>
        <h2 className={styles.subheading}>My TV Lyst <FontAwesomeIcon className={styles.icon} icon={faPlusSquare}></FontAwesomeIcon></h2> 
        <ul className={styles.filmListUl}> 
            <FilmCard filmData={filmData[0]}/>       
            </ul>
        </div>
        <div>
            <InputModal inputValue={props.inputValue} genreValue={props.genreValue} streamingValue={props.streamingValue} handlechange={props.handlechange} handleGenreChange={props.handleGenreChange}/> 
            </div>
        </div>
     
        </>
    )
}

export default TVList
