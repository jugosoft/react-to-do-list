import React from "react";

export default function ToDo (props) {
    return(
        <tr key={props.todo.id}>
            <td style={{textDecoration: props.todo.statusCompleted ? 'line-through' : 'none' }}>{props.todo.task}</td>
            <td>
                <button className="rounded" onClick={props.completeTask.bind(this, props.todo.id)}>C0mpla3te Task</button>
            </td>
            <td>
                <button className="rounded" onClick={() => props.removeTask(props.todo.id)}>Remove Task</button>
            </td>
        </tr>
    );
}