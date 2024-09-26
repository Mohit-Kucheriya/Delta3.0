import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    function UpdateTodo(event) {
        // console.log(event.target.value)
        setNewTodo(event.target.value);
    }

    function AddTodo() {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }];
        });
        setNewTodo(""); //this will reset the input field
    }

    //Use this function
    function deleteTodo(id) {
        // console.log("Delete Todo")
        console.log(id);
        // let copy = todos.filter((todo)=>todo.id !== id);
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add a task"
                onChange={UpdateTodo}
                value={newTodo}
            />
            <button onClick={AddTodo}>Add</button>
            <br />
            <br />
            <p>Task Todo</p>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span> {todo.task}</span>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li> //As now todo is an object
                ))}
            </ul>
        </div>
    );
}
