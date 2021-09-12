import React from 'react';
import AnswersList from '../../components/CurrentTask/AnswersList/AnswersList';
import './CurrentTask.css';

export default function CurrentTask(props) {
    return(
        <div className="CurrentTask">
            <p>
                <span>
                    <strong>
                        Как дела?
                    </strong>
                </span>
                <small>
                    currentNumber
                </small>
            </p>

            <AnswersList
                answers={props.answers} />
        </div>
    );
}