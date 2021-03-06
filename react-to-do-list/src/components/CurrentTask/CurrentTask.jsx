import React from 'react';
import AnswersList from '../../components/CurrentTask/AnswersList/AnswersList';
import './CurrentTask.css';

export default function CurrentTask(props) {

    return(
        <div className="CurrentTask">
            <p>
                <span>
                    <strong>
                    {props.currentNumber + 1}.{props.question}
                    </strong>
                </span>
                <span>|</span>
                <small>
                    {props.currentNumber + 1} из {props.quizLength}
                </small>
            </p>

            <AnswersList
                answers={props.answers} 
                handleClick={props.handleClick}
                error={props.error}
                answerState={props.answerState}
                answersEnum={props.answersEnum}/>
        </div>
    );
}