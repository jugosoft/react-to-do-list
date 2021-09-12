import React from 'react';
import CurrentTask from '../../components/CurrentTask/CurrentTask';
import './Quiz.css';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: 0,
            error: false,
            quiz: [
                {
                    question: 'Тестовый вопрос',
                    correctAnswer: 1,
                    answers: [
                        { text: 'Test 123', id: 1 },
                        { text: 'В натуре', id: 2 },
                        { text: 'Чётко', id: 3 },
                        { text: 'Пацаны', id: 4 },
                        { text: 'Ваще ребята', id: 5 },
                        { text: '123_test', id: 6 }
                    ]
                },
                {
                    question: 'Тестовый вопрос 2',
                    correctAnswer: 3,
                    answers: [
                        { text: 'Чётка', id: 1 },
                        { text: 'В натуре', id: 2 },
                        { text: '123_test', id: 3 }
                    ]
                }
            ]
        };
    }

    checkQuizFinished = () => this.state.currentNumber + 1 === this.state.quiz.length


    handleClick = (answerId) => {
        console.debug(answerId);
        if (answerId && answerId === this.state.quiz[this.state.currentNumber].correctAnswer) {
            if (this.checkQuizFinished()) {
                alert('Вопросы кончились, приходите завтра');
                this.setState({
                    currentNumber: 0,
                    error: false
                });
            } else {
                this.setState({
                    currentNumber: this.state.currentNumber + 1,
                    error: false
                });
            }
        } else {
            this.setState({
                error: true
            });
        }
    }

    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <div>
                        <h1>Quiz</h1>
                    </div>
                    <CurrentTask
                        answers={this.state.quiz[this.state.currentNumber].answers}
                        question={this.state.quiz[this.state.currentNumber].question}
                        handleClick={this.handleClick}
                        currentNumber={this.state.currentNumber}
                        quizLength={this.state.quiz.length}
                        error={this.state.error} />
                </div>
            </div>
        );
    }
}

export default Quiz;