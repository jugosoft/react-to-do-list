import React from 'react';
import CurrentTask from '../../components/CurrentTask/CurrentTask';
import classes from './Quiz.css';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: 0,
            quiz: [
            {
                answers: [
                    { text: 'Заебись' },
                    { text: 'В натуре' },
                    { text: 'Чётко' },
                    { text: 'Пацаны' },
                    { text: 'Ваще ребята' },
                    { text: '123_test' }
                ]
            }
        ]
        };
    }
    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <div>
                        <h1>Quiz</h1>
                    </div>
                    <CurrentTask 
                        answers={this.state.quiz[0].answers} />
                </div>
            </div>
        );
    }
}

export default Quiz;