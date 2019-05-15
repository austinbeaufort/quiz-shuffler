import React from 'react';
import homepic from '../../img/homepic.png';
import styles from './Home.module.css';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <img src={homepic} width="300px" alt="quiz and pencil" />
            </div>
            <Link to="/create">
                <button className={styles.btn + ' mt-5'}>Let's Get Started!</button>
            </Link>
        </div>
    )
}

export default Home;