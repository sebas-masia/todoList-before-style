import React from "react";

const TodoItem = ({ todo, onToggleComplete, onDelete}) => {
    if (!todo) {
        return null
    }

    return (
        <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
            {todo.text}
            <button onClick={onToggleComplete}>
                {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={onDelete}>Delete</button>
        </li>
    )
}

export default TodoItem