import React from "react";
import classes from './Quiz.css';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }
    render() {
        return(
            <div className="Quiz">
                <h1>Quiz</h1>
            </div>
        );
    }
}

export default Quiz;