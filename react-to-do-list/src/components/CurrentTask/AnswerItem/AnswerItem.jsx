import React from 'react';
import './AnswerItem.css';

export default function AnswersItem (props) {
    return(
        <li className="AnswerItem">
            {props.answer.text}
        </li>
    );
}