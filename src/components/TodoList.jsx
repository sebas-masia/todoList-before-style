import React, {useState} from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')

    console.log(todos, 'todos')

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, {text: newTodo, completed: false}])
            setNewTodo('')
        }
    }

    const handleToggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            return i === index ? {...todo, completed: !todo.completed} : todo
        })
        setTodos(updatedTodos)
    }

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index)
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Todo List</h1>
            <input 
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} 
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        onToggleComplete={() => handleToggleComplete(index)}
                        onDelete={() => handleDeleteTodo(index)} 
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList