import React from 'react'
import styles from './UserInput.module.scss'
const UserInput = () => {
    return (
        <div className={styles.userInputWrapper}>
            <h3 className={styles.subheading}>Add new film</h3>
            <form action="" className={styles.form}>
                <input type="text" className={styles.textInput}/>
                <button className={styles.submitButton}>+</button>
            </form>
            <select name="streaming" id="streaming" className={styles.dropdown}>
           <option value="netflix">Netflix</option>
           <option value="disneyPlus">Disney +</option>
           <option value="nowTV">Now Tv</option>
             <option value="amazonPrime">Amazon Prime</option>
             <option value="mubi">Mubi</option>
             <option value="bfiPlayer">BFI Player</option>
          </select>
        </div>
    )
}

export default UserInput
