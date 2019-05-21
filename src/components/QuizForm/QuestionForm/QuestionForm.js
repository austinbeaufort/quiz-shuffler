import React from 'react';
import styles from './QuestionForm.module.css';
import '../../../App.css';
import {
    Label,
    Input
} from 'reactstrap';

const QuestionForm = props => {
    if (props.type === 'mc') {
        return(
            <div className={styles.card}>
                <Label for="mcQuestion">Question</Label>
                <Input 
                    type="text" 
                    onChange={props.change}
                    name="mcQuestion" 
                    id="mcQuestion" 
                    placeholder="place question here" 
                    />
                <h4 className="mt-4">Enter Possible Answers</h4>
                <Label for="optionA"></Label>
                <Input type="text" onChange={props.change} name="optionA" id="optionA" placeholder="optionA" />
                <Label for="optionB"></Label>
                <Input type="text" onChange={props.change} name="optionB" id="optionB" placeholder="optionB" />
                <Label for="optionC"></Label>
                <Input type="text" onChange={props.change} name="optionC" id="optionC" placeholder="optionC" />
                <Label for="optionD"></Label>
                <Input style={{marginBottom: "20px"}} type="text" onChange={props.change} name="optionD" id="optionD" placeholder="optionD" />
                <button 
                    id="add-question"
                    type="button"
                    onClick={props.addQuestion}
                    className={styles.btn + ' mt-3'}>Add This Question
                </button>
            </div>
        )

    } else if (props.type === 'tf') {
        return (
            <div className={styles.card}>
                <Label for="tfQuestion">Question (T/F)</Label>
                <Input 
                    type="text" 
                    onChange={props.change}
                    name="tfQuestion" 
                    id="tfQuestion" 
                    placeholder="place question here" 
                    style={{marginBottom: "20px"}}
                    />
                <button 
                    id="add-question"
                    type="button"
                    onClick={props.addQuestion}
                    className={styles.btn + ' mt-3'}>Add This Question
                </button>
            </div>
        )
    } else {
        return (
            <div className={styles.card}>
                <Label for="saQuestion">Question</Label>
                <Input 
                    type="text" 
                    onChange={props.change}
                    name="saQuestion" 
                    id="saQuestion" 
                    placeholder="place question here" 
                    style={{marginBottom: "20px"}}
                    />
                <button 
                    id="add-question"
                    type="button"
                    onClick={props.addQuestion}
                    className={styles.btn + ' mt-3'}>Add This Question
                </button>
            </div>
        )
    }
    
}

export default QuestionForm;