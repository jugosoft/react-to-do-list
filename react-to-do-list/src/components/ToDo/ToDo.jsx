import React from "react";

export default function ToDo (props) {
    return(
        <div key={props.todo.id}>
            <span style={{textDecoration: props.todo.statusCompleted ? 'line-through' : 'none' }}>{props.todo.task}</span>
            <span>|</span>
            <span>
                <button onClick={props.completeTask.bind(this, props.todo.id)}>C0mpla3te Task</button>
            </span>
            <span>
                <button onClick={() => props.removeTask(props.todo.id)}>Remove Task</button>
            </span>
        </div>
    );
}