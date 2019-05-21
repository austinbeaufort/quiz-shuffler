import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div>
            <h2 style={{marginBottom: "20px"}}>Why Make a Quiz Shuffler?</h2>
            <p> 
                Before being a web developer, <br></br>
                I was a teacher for three years. 
            </p>
            <hr></hr>
            <p>
                One of my goals as a developer is to
                <br></br> help teachers save time without
                sacrificing quality.
            </p>
            <hr></hr>
            <p>
                Type questions once, and the shuffler will create
                <br></br> the randomized tests for you.
            </p>
            <hr></hr>
            <p>
                This is one small way of saying "thank you teachers", 
                <br></br>Keep being awesome.
            </p>
            <hr></hr>
            <p>
                Now instead of mixing questions by hand for
                <br></br> 30 different quizzes, go get that coffee you want, 
                <br></br> you earned it. 
                <span role="img" aria-label="coffee" className={styles.coffee}>☕</span>
            </p>   
        </div>
    )
}

export default About;