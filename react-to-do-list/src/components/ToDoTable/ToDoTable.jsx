import React from "react";

import ToDo from '../../components/ToDo/ToDo';

export default function ToDoTable(props) {
    return (
        <table>
            <tr>
                <th>Текст задачи</th>
                <th>Выполнить</th>
                <th>Удалить</th>
            </tr>
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
        </table>
    );
}