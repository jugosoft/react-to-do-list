import React from 'react';
import ToDoForm from '../../components/ToDoForm/ToDoForm';
import ToDoTable from '../../components/ToDoTable/ToDoTable';

export default function ToDoApp(props) {
    console.debug(props);
    return (
        <React.Fragment>
            <header>
                <h1>Задач всего: {props.todoList.length}</h1>
            </header>
            <hr />
            <div>
                <ToDoForm addTask={props.addTask} />
            </div>
            <hr />
            <ToDoTable
                todoList={props.todoList}
                removeTask={props.removeTask}
                completeTask={props.completeTask} />
        </React.Fragment>
    );
}