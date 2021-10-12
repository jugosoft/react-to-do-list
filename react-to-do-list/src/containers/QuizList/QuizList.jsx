import React from 'react';
import { NavLink } from 'react-router-dom';
import './QuizList.css';
import axios from 'axios';

export default class CreateQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [1]
        };
    }

    listQuizes = () => {
        return [1, 2].map((quiz, index) => {
            return (<li key={index}>
                <NavLink to={`/quiz/${quiz}`}> Test {quiz} </NavLink>
            </li>
            );
        });
    }

    componentDidMount = () => {
        axios.get('https://react-demo-5baa0-default-rtdb.europe-west1.firebasedatabase.app/data.json').then((response) => {
            this.setState({ response });
        });

        axios.get('https://react-demo-5baa0-default-rtdb.europe-west1.firebasedatabase.app/array.json').then((response) => {
            this.setState({ data: response.data });
            console.log(this.state);
        });

        axios.post('https://react-demo-5baa0-default-rtdb.europe-west1.firebasedatabase.app/array.json', this.state).then((response) => {
            this.setState({ response: response.data });
            console.log(this.state);
        });
    }

    render() {
        return (
            <div className="QuizList" >
                <h1>Quiz  Listing. </h1>
                < small > Here goes a list of quizes</small >
                <ul>
                    {this.listQuizes()}
                </ul>
            </div >
        );
    }
}