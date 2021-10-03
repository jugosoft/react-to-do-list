import React from 'react';
import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';

import ToDoApp from './components/ToDoApp/ToDoApp';

import PerfectCounter from './components/PerfectCounter/PerfectCounter';
import AsyncComponent from './components/AsyncComponent/AsyncComponent';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import QuizList from './containers/QuizList/QuizList';
import CreateQuiz from './containers/CreateQuiz/CreateQuiz';
import Auth from './containers/Auth/Auth';

function App() {

  // Пробую использовать хуки для того, чтобы не 
  // делать классовый компонент и быть модным
  const [todoList, setTodoList] = useState([]);

  const addTask = (userInput) => {
    if (!userInput)
      return;
    const newItem = {
      id: Math.round(Math.random() * 1000000),
      task: userInput,
      statusActive: false,
      statusCompleted: false
    };
    setTodoList([...todoList, newItem]);
  };

  const removeTask = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, statusCompleted: true } : todo));
  };

  return (
    <Layout>
      <AsyncComponent />
      <Switch>
        
        <Route path="/todo" render={(props) => (<ToDoApp {...props} todoList={todoList} removeTask={removeTask} addTask={addTask} completeTask={completeTask} />)} />
        <Route path="/counter" component={PerfectCounter} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/quizlist" component={QuizList} />
        <Route path="/createquiz" component={CreateQuiz} />
        <Route path="/auth" component={Auth} />
        <Route path="/" component={PerfectCounter} />
      </Switch>

    </Layout>
  );
}

export default App;
