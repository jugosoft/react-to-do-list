import React from 'react';
import AnswersItem from '../AnswerItem/AnswerItem';
import './AnswersList.css';

export default function AnswersList (props) {

    return(
        <ul className="AnswersList">
            {
                props.answers.map((answer, index) => {
                    return(
                        <AnswersItem 
                            key={index}
                            answer={answer}
                            handleClick={props.handleClick}
                            error={props.error}
                            answerState={props.answerState}
                            answersEnum={props.answersEnum}/>
                    );
                })
            }
        </ul>
    );
}