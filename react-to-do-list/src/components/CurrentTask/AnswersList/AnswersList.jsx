import React from 'react';
import AnswersItem from '../AnswerItem/AnswerItem';
import './AnswersList.css';

export default function AnswersList (props) {
    
    let className ="AnswersList";
    if (props.error) {
        className += " error";
    }

    
    return(
        <ul className={className}>
            {
                props.answers.map((answer, index) => {
                    return(
                        <AnswersItem 
                            key={index}
                            answer={answer}
                            handleClick={props.handleClick}
                            error={props.error}/>
                    );
                })
            }
        </ul>
    );
}