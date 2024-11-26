import React from "react"
import { useState } from "react"

export default function ToDoInput(props) {
    const {handleAddTodo, todoValue, setTodoValue} = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter ToDo..." />
            <button onClick={() => {
                handleAddTodo(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}