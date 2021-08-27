import React from 'react'
import styles from './UsageGuide.module.scss'
import NavBar from '../../Components/NavBar'
const UsageGuide = () => {
    return (
        <div className={styles.guideContainer}>
            <NavBar />
                   <section className={styles.usageContainer}>
                       <h2 className={styles.heading}>Using Reel Lyst</h2>
                   <ul className={styles.instructionList}>
                       <li className={styles.listItem}>Add a film</li>
                       <ul className={styles.subList}>
                           <li className={styles.subListItem}>Add a film name, genre, streaming service, release year, runtime and upload an image using an image adress in the form</li>
                           <li className={styles.subListItem}> Add film to the list using the plus button or pressing enter on your keyboard</li>
                           <li className={styles.subListItem}> Your new film will view at the bottom of the screen </li>
                       </ul>
                       <section className={styles.imageWrapper}>
                       <div className={styles.imageContainer}></div>
                   </section>
                       <li className={styles.listItem}>Deleting a film</li>
                       <ul className={styles.subList}>
                           <li className={styles.subListItem}>To delete a film, double click on the minus icon on the right hand side of the film card in your list. </li>
                           <li className={styles.subListItem}> Your film will have now been deleted from your list and your database</li>
                       </ul>
                       <section className={styles.imageWrapper}>
                       <div className={styles.imageContainerTwo}></div>
                   </section>
                   </ul>
                   </section>
        </div>
    )
}

export default UsageGuide
