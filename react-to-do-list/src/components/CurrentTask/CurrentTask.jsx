import React from 'react';
import AnswersList from '../../components/CurrentTask/AnswersList/AnswersList';
import './CurrentTask.css';

export default function CurrentTask(props) {

    const handleClick = function (event) {
        console.log(event);
    }

    return(
        <div className="CurrentTask">
            <p>
                <span>
                    <strong>
                        {props.question}
                    </strong>
                </span>
                <small>
                    currentNumber
                </small>
            </p>

            <AnswersList
                answers={props.answers} 
                handleClick={handleClick}/>
        </div>
    );
}