import React from 'react';
import { NavLink } from 'react-router-dom';
import './QuizList.css';

export default class CreateQuiz extends React.Component {

    constructor(props) {
        super(props);
    }

    listQuizes = () => {
        return [1, 2].map((quiz, index) => {
            return (<li key={index}>
                <NavLink to={`/quiz/${quiz}`}> Test {quiz} </NavLink>
            </li>
            );
        });
    }

    render() {
        return (
            <div className="QuizList">
                <h1>Quiz  Listing. </h1>
                <small>Here goes a list of quizes</small>
                <ul>
                    {this.listQuizes()}
                </ul>
            </div>
        );
    }
}