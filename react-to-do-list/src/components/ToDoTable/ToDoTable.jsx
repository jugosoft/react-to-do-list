import React from "react";

import ToDo from '../../components/ToDo/ToDo';

export default function ToDoTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <td>Текст задачи</td>
                    <td>Выполнить</td>
                    <td>Удалить</td>
                </tr>
            </thead>
            <tbody>
            {
                props.todoList.map(todo => {
                    return (
                        <ToDo
                            key={todo.id}
                            todo={todo}
                            removeTask={props.removeTask}
                            completeTask={props.completeTask} />
                    )
                })
            }
            </tbody>
        </table>
    );
}