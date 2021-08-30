import React from 'react';
import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDo from './components/ToDo/ToDo';

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
  }

  const completeTask = (id) => {
    console.log('хукуку');
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, statusCompleted: true } : todo));
  }

  return (
    <div className="App">
      <header>
        <h1>Задач всего: {todoList.length}</h1>
      </header>
      <hr />
      <div>
        <ToDoForm addTask={addTask} />
      </div>
      <hr />
      <div>
        {
          todoList.map(todo => {
            return (
              <ToDo
                key={todo.id}
                todo={todo}
                removeTask={removeTask}
                completeTask={completeTask} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
