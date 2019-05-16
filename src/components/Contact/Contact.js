import React from 'react';
import styles from './Contact.module.css';
import { SocialIcon } from 'react-social-icons';


const Contact = () => {
    return (
        <div className={styles.iconContainer}>
            <h1>Thank you for using Quiz Randomizer!</h1>
            <br></br>
            <h3>Have questions or feedback?</h3>
            <hr></hr>
            <br></br>
            <h3>Let's talk.</h3>
            <SocialIcon className={styles.icon} url='https://twitter.com/BeaufortAustin' />
            <SocialIcon className={styles.icon} url='https://medium.com/@austinbeaufort' />
            <SocialIcon className={styles.icon} url='https://github.com/austinbeaufort/' />
            <SocialIcon className={styles.icon} url='https://www.linkedin.com/in/austinbeaufort/' />
        </div>
    )
}

export default Contact;