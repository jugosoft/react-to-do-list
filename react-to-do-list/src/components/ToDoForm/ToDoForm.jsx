import React from "react";
import { useState } from 'react';

export default function ToDoForm (props) {
    const space = '';
    const [userInput, setUserInput] = useState('');

    const handleSumbitForm = (event) => {
        event.preventDefault();
        props.addTask(userInput);
        setUserInput(space);
    }

    const handleChange = (event) => {
        setUserInput(event.currentTarget.value);
    }

    return(
        <form onSubmit={handleSumbitForm}>
            <input 
                value={userInput}
                type="text"
                placeholder="Введи, что желаешь"
                onChange={handleChange}/>                
                <button onClick={handleSumbitForm}>Press Me</button>
        </form>
    );
}