import React from 'react'
import NavBar from '../../Components/NavBar'
import FilmList from '../../Components/FilmList'
import SideContainer from '../../Components/SideContainer'
import UserInput from '../../Components/UserInput'
import styles from './UserDashboard.module.scss'
import InputModal from '../../Components/InputModal'
const UserDashboard = (props) => {
    return (
        <>
        <NavBar />
        <div></div>
        <section className={styles.dashboardOverview}>
                <div>
                <SideContainer />
               
                <InputModal inputValue={props.inputValue} genreValue={props.genreValue} streamingValue={props.streamingValue} handlechange={props.handlechange} handleGenreChange={props.handleGenreChange}/>
                </div>
                <div>
                <FilmList />
                </div>                
        </section>
        </>

    )
}

export default UserDashboard
