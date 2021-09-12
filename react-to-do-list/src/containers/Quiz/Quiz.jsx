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
                question: 'Тестовый вопрос',
                correctAnswer: 1,
                answers: [
                    { text: 'Заебись', id:1 },
                    { text: 'В натуре', id:2 },
                    { text: 'Чётко', id:3 },
                    { text: 'Пацаны', id:4 },
                    { text: 'Ваще ребята', id:5 },
                    { text: '123_test', id:6 }
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
                        answers={this.state.quiz[0].answers} 
                        question={this.state.quiz[0].question} />
                </div>
            </div>
        );
    }
}

export default Quiz;