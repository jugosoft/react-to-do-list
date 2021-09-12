import React from 'react';
import './AnswerItem.css';

export default function AnswersItem (props) {

    return(
        <li className="AnswerItem" onClick={props.handleClick.bind(this, props.answer.id)}>
            {props.answer.text}
        </li>
    );
}