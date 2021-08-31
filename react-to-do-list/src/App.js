import React from 'react';
import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoTable from './components/ToDoTable/ToDoTable';

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
    console.log('debug');
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const completeTask = (id) => {
    console.log('хукуку');
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, statusCompleted: true } : todo));
  };

  return (
    <div className="container">
      <header className="centered">
        <h1>Задач всего: {todoList.length}</h1>
      </header>
      <hr />
      <div>
        <ToDoForm addTask={addTask} />
      </div>
      <hr />
      <ToDoTable 
        todoList={todoList}  
        removeTask={removeTask}
        completeTask={completeTask}/>
    </div>
  );
}

export default App;
