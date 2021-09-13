import React from 'react';
import './FinishedTask.css';

export default function FinishedTask(props) {
    let correctAnswers = props.results.reduce((total, result) => {
        if (result === 'success') {
            return ++total;
        }
        return total;
    }, 0);

    debugger;

    return (
        <div className="FinishedTask">
            <p>
                Правильно {correctAnswers} из {props.quiz.length}
            </p>
            <ul>
                {
                    props.results.map((result, index) => {
                        return (
                            <li key={index}>
                                <strong>1 ----</strong>
                                <i className="fa fa-times"></i>
                            </li>
                        );
                    })
                }
            </ul>
            <div>
                <button onClick={props.handleRetry}>Повторить</button>
            </div>
        </div>
    );
}