import React from 'react'
import NavBar from '../../Components/NavBar'
import FilmList from '../../Components/FilmList'
import SideContainer from '../../Components/SideContainer'
import styles from './UserDashboard.module.scss'
import InputModal from '../../Components/InputModal'
const UserDashboard = (props) => {
    return (
        <>
        <NavBar />
        <div></div>
        <section className={styles.dashboardOverview}>
                {/* <div>
                <SideContainer />    
                </div> */}
                <div>
                <FilmList inputValue={props.inputValue} genreValue={props.genreValue} streamingValue={props.streamingValue} handleStreamingChange={props.handleStreamingChange}
        handlechange={props.handlechange} handleGenreChange={props.handleGenreChange} runTimeValue={props.runTimeValue}  handleTimeChange={props.handleTimeChange} films={props.films}/>
                </div> 
                <div className={styles.modalWrapper}>         
                </div>
        </section>

        </>

    )
}

export default UserDashboard
