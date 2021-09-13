import React from 'react';
import CurrentTask from '../../components/CurrentTask/CurrentTask';
import FinishedTask from '../../components/FinishedTask/FinishedTask';
import './Quiz.css';

class Quiz extends React.Component {
    answersEnum = Object.freeze({
        'success': 'success',
        'error': 'error',
        'new': 'new'
    });

    constructor(props) {
        super(props);
        this.state = {
            currentNumber: 0,
            results: [],
            isFinished: false,
            answerState: null, // { [id]: 'success' 'error' }
            quiz: [
                {
                    id: 0,
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
                    id: 1,
                    question: 'Тестовый вопрос 2',
                    correctAnswer: 3,
                    answers: [
                        { text: 'Чётка', id: 1 },
                        { text: 'В натуре', id: 2 },
                        { text: '123_test', id: 3 }
                    ]
                },
                {
                    id: 2,
                    question: 'Тестовый вопрос 3',
                    correctAnswer: 2,
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

    handleRetry = () => {
        this.setState({
            currentNumber: 0,
            answerState: null,
            isFinished: false,
            results: []
        })
    }

    handleClick = (answerId) => {

        const question = this.state.quiz[this.state.currentNumber];
        const results = this.state.results;

        if (answerId && answerId === question.correctAnswer) {

            if (!results[question.id]) {
                results[question.id] = this.answersEnum.success;
            }

            this.setState({
                answerState: {
                    [answerId]: this.answersEnum.success
                }
            });

            const timeout = window.setTimeout(() => {
                if (this.checkQuizFinished()) {
                    this.setState({
                        isFinished: true
                    });
                } else {

                    this.setState({
                        currentNumber: this.state.currentNumber + 1,
                        answerState: null
                    });
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            results[question.id] = this.answersEnum.error;
            this.setState({
                answerState: {
                    [answerId]: this.answersEnum.error,
                    results: results
                }
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
                    <div>
                        {
                            this.state.isFinished
                                ? <FinishedTask
                                    results={this.state.results}
                                    quiz={this.state.quiz}
                                    handleRetry={this.handleRetry}
                                />
                                : <CurrentTask
                                    answers={this.state.quiz[this.state.currentNumber].answers}
                                    question={this.state.quiz[this.state.currentNumber].question}
                                    handleClick={this.handleClick}
                                    currentNumber={this.state.currentNumber}
                                    quizLength={this.state.quiz.length}
                                    answerState={this.state.answerState}
                                    answersEnum={this.answersEnum} />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Quiz;