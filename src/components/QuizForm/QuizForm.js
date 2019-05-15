import React, { Component } from 'react';
import styles from './QuizForm.module.css';
import { Link } from 'react-router-dom';
import QuestionForm from './QuestionForm/QuestionForm';
import * as jsPDF from 'jspdf';

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Alert
} from 'reactstrap';

class QuizForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questionType: 'mc',
            quizValues: [],
            mcQuestion:'',
            tfQuestion:'',
            saQuestion:'',
            optionA:'',
            optionB:'',
            optionC:'',
            optionD:'',
            true: '',
            false: '',
            quizName: '',
            studentCount: '',
            visible: false
        }

        this.typeHandler = this.typeHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.addNewQuestion = this.addNewQuestion.bind(this);
        this.pdfHandler = this.pdfHandler.bind(this);
        this.hideQuizName = this.hideQuizName.bind(this);
        this.lastStepHandler = this.lastStepHandler.bind(this);
        this.shuffleQuizHandler = this.shuffleQuizHandler.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        })
        setTimeout(() => {
            this.setState({
                visible: !this.state.visible
            });
        }, 1000);
    }

    componentDidMount() {
        document.addEventListener('keydown', e => {
            if(e.code === 'Enter') {
                e.preventDefault();
            }
        });
    }


    typeHandler() {
        let type = document.querySelector('#question-type').value;
        this.setState({
            questionType: type
        });
    }

    hideQuizName() {
        let quizContainer = document.querySelector('#quizNameContainer');
        let studentContainer = document.querySelector('#studentCountContainer');
        let quizButton = document.querySelector('#quizNameButton');
        quizContainer.style.display = "none";
        studentContainer.style.display = "none";
        quizButton.style.display = "none";

        let formDisplay = document.querySelector('#form');
        let formLabel = document.querySelector('#formLabel');
        formLabel.classList.remove('QuizForm_formDisplay__1n1Zs');
        formDisplay.classList.remove('QuizForm_formDisplay__1n1Zs');
    }


    changeHandler(e) {
        
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    clearform() {
        document.querySelector('#form').reset();
    }

    addNewQuestion() {
        if(this.state.questionType === "mc") {
            this.setState({
                quizValues: [...this.state.quizValues, {
                    question: this.state.mcQuestion,
                    a: this.state.optionA,
                    b: this.state.optionB,
                    c: this.state.optionC,
                    d: this.state.optionD
                }]
            })
            this.clearform();
        }
        else if (this.state.questionType === "tf") {
            this.setState({
                quizValues: [...this.state.quizValues, {
                    question: this.state.tfQuestion,
                    true: 'true',
                    false: 'false'
                }]
            })
            this.clearform();
        }
        else {
            this.setState({
                quizValues: [...this.state.quizValues, {
                    question: this.state.saQuestion
                }]
            })
            this.clearform();
        }
        this.toggle();
    }
    

    pdfHandler() {
        let quiz = this.state.quizValues;
        let quizName = this.state.quizName;
        let doc = new jsPDF();
        let questionArray = [];
        let possibleForm = `
                <h5 style="font-size:16px">Name:</h5>
                <h5 style="font-size:16px">Date:</h5>
                <h2 style="font-size:25px">${quizName}</h2>
                <br><br>
        `;
        for (let i = 0; i < quiz.length; i++) {
            questionArray.push(Object.values(quiz[i]));
        }
        let quizLength = questionArray.length;
        for (let i = 0; i < quizLength; i++) {
            let questionNumber = i + 1;
            if(questionArray[i].length === 1) {
                possibleForm += `<p style="font-size:20px">${questionNumber}. ${questionArray[i][0]}</p><br><br><br><br>`;
            }
            else if (questionArray[i].length === 3) {
                possibleForm += `<p style="font-size:20px">${questionNumber}. ${questionArray[i][0]} <span style="font-size:15px"> (Circle One)</span></p>
                                <p style="font-size:16px">a. True ______________ b. False</p>
                                <br><br>
                                `
            }
            else {
                possibleForm += `<p style="font-size:20px">${questionNumber}. ${questionArray[i][0]}</p>
                                <p style="font-size:16px">a. ${questionArray[i][1]} _ _ _ _ _ b. ${questionArray[i][2]} _ _ _ _ _ c. ${questionArray[i][3]} _ _ _ _ _ d. ${questionArray[i][4]} </p>
                                <br><br>` 
            }
        }

        let finalForm = ``;
        for (let i = 0; i < this.state.studentCount; i++) {
            if (this.state.studentCount - 1 === i) {
                finalForm += `${possibleForm}`
            }
            else {
                finalForm += `${possibleForm} <!--ADD_PAGE-->`
            }
        }
        doc.fromHTML(finalForm, 10, 10);
        doc.save('myquiz.pdf');
    }

    shuffleQuizHandler() {
        let quiz = this.state.quizValues;
        let quizName = this.state.quizName;
        let doc = new jsPDF();
        let questionArray = [];
        for (let i = 0; i < quiz.length; i++) {
            questionArray.push(Object.values(quiz[i]));
        }
        let finalForm = ``;

        for (let i =  0; i < this.state.studentCount; i++) {

            for (let i = questionArray.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [questionArray[i], questionArray[j]] = [questionArray[j], questionArray[i]];
            }
            // Pdf formatting
            let possibleForm = `
            <h5 style="font-size:16px">Name:</h5>
            <h5 style="font-size:16px">Date:</h5>
            <h2 style="font-size:25px">${quizName}</h2>
            <br><br>`;
            let quizLength = questionArray.length;
            for (let i = 0; i < quizLength; i++) {
                let questionNumber = i + 1;
                if(questionArray[i].length === 1) {
                    possibleForm += `<p style="font-size:20px">${questionNumber}. ${questionArray[i][0]}</p><br><br><br><br>`;
                }
                else if (questionArray[i].length === 3) {
                    possibleForm += `<p style="font-size:20px">${questionNumber}. ${questionArray[i][0]} <span style="font-size:15px"> (Circle One)</span></p>
                                    <p style="font-size:16px">a. True ______________ b. False</p>
                                    <br><br>
                                    `
                }
                else {
                    possibleForm += `<p style="font-size:20px">${questionNumber}. ${questionArray[i][0]}</p>
                                    <p style="font-size:16px">a. ${questionArray[i][1]} _ _ _ _ _ b. ${questionArray[i][2]} _ _ _ _ _ c. ${questionArray[i][3]} _ _ _ _ _ d. ${questionArray[i][4]} </p>
                                    <br><br>` 
                }
            }
            if (this.state.studentCount - 1 === i) {
                finalForm += `${possibleForm}`
            }
            else {
                finalForm += `${possibleForm} <!--ADD_PAGE-->`
            }
        }

        doc.fromHTML(finalForm, 10, 10);
        doc.save('myquiz.pdf');
    }

    lastStepHandler() {
        let formDisplay = document.querySelector('#form');
        let formLabel = document.querySelector('#formLabel');
        formLabel.classList.add('QuizForm_formDisplay__1n1Zs');
        formDisplay.classList.add('QuizForm_formDisplay__1n1Zs');

        let styleDisplay = document.querySelector('#styleDisplay');
        styleDisplay.classList.remove('QuizForm_formDisplay__1n1Zs');
    }


    render() {

        return (
            <div className="container">
                <div id="quizNameContainer" className={styles.quizName}>
                    <Label for="quizName"> Name your Quiz!</Label>
                    <Input onChange={this.changeHandler} id="quizName" type="text">
                    </Input>
                </div>
                <div id="studentCountContainer" className={styles.quizName}>
                <Label for="studentCount"> How Many Students? (If unsure add a few extra just in case!)</Label>
                    <Input onChange={this.changeHandler} id="studentCount" type="text">
                    </Input>
                </div>
                <button id="quizNameButton" onClick={this.hideQuizName} className={styles.btn + ' mt-3 mb-0'}> Next Step <span style={{fontSize: "20"}}>➜</span></button>
                <Alert color="primary" isOpen={this.state.visible} toggle={this.toggle}>Question Added!</Alert>
                <div id="formLabel" className={styles.questionTypeCard + ' ' + styles.formDisplay}>
                <Label for="question-type"> Choose a Question Type</Label>
                <Input onChange={this.typeHandler} id="question-type" type="select" bsSize="sm">
                    <option value="mc">Multiple Choice</option>
                    <option value="tf">True / False</option>
                    <option value="sa">Short Answer</option>
                </Input>
                </div>
                <Form className={styles.formDisplay} id="form" onSubmit={this.submitHandler} >  
                    <div>
                        <QuestionForm addQuestion={this.addNewQuestion} change={this.changeHandler} type={this.state.questionType}/>
                        <button type="button" onClick={this.lastStepHandler} className={styles.btn + ' mt-3'}>Done adding Questions?<br></br><br></br> Last step <span style={{fontSize: "20"}}>➜</span></button>
                    </div>
                </Form>
                <div id="styleDisplay" className={styles.formDisplay}>
                        <div className={styles.endCard}>
                            <h4>Create Quiz "as is"</h4>
                            <Link to="/contact">
                                <button type="button" onClick={this.pdfHandler} className={styles.btn + ' mt-3'}>Finished? Download PDF</button>
                            </Link>
                        </div>
                        <div className={styles.endCard2}>
                            <h4>Shuffle my quiz questions!</h4>
                            <Link to="/contact">
                                <button type="button" onClick={this.shuffleQuizHandler} className={styles.btn + ' mt-3'}>Finished? Download PDF</button>
                            </Link>
                        </div>
                    
                </div>

            </div>
        )
    }
}

export default QuizForm;