'use client'
import { useState } from "react";
import { Todo } from "../types.ts"

interface TodoListProps {
    initialTodos: Todo[];
}

const  TodoList: React.FC<TodoListProps> = ({initialTodos}) => {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    const [editingTodo, setEditingTodo] = useState<number | null>(null);

    function addTodo(t: string) {
        const create = document.getElementById(t) as HTMLInputElement | null;
        if (create) {
            if (create.value !== ""){
            const newTodo: Todo = {userId: 1, id: Date.now(), completed: false, title: create.value }
                setTodos([...todos, newTodo])
                console.log(todos)
            } else {
                alert("Please Enter A Title");
            }
         }
    }
    
    function editTodo(id: number, value: string) {
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                todo.title = value;
                console.log(todos)
                return todo;
            } else {
                return todo;
            }
        }
            
        ))
    }
    
    function deleteTodo(id: number) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }
    
    return (
        <div>
            <p id="title">Todo List:</p>
            <input id="create" placeholder="Create New Todo"></input>
            <button onClick={() => addTodo("create")}>Create</button>
            {todos.map((todo) => {
        return (
            <div><span>Todo:</span>
                <input

                    type="text"
                    value={todo.title}
                    onChange={e => editTodo(todo.id, e.target.value)}/>
                    <span>Completed: {todo.completed ? "True " : "False"}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>

            </div>
        );
    })}
</div>

    );
}



export default TodoList;