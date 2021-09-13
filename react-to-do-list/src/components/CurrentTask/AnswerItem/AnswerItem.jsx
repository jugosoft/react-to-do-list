import React from 'react';
import './AnswerItem.css';

export default function AnswersItem (props) {
        
    let classes = ['AnswerItem'];

    if (props.answerState) {
        classes.push(props.answerState[props.answer.id]);
    }

    return(
        <li className={classes.join(' ')} onClick={props.handleClick.bind(this, props.answer.id)}>
            {props.answer.text}
        </li>
    );
}