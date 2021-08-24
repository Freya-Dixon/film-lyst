import React from 'react'
import NavBar from '../../Components/NavBar'
import FilmList from '../../Components/FilmList'
import SideContainer from '../../Components/SideContainer'
import UserInput from '../../Components/UserInput'
import styles from './UserDashboard.module.scss'
const UserDashboard = () => {
    return (
        <>
        <NavBar />
        <div></div>
        <section className={styles.dashboardOverview}>
                <div>
                <SideContainer />
                </div>
                <div>
                <FilmList />
                </div>                
        </section>
        </>

    )
}

export default UserDashboard
