'use client'
import { useState } from "react";
import { Todo } from "../types.ts"

interface TodoListProps {
    initialTodos: Todo[];
}

const  TodoList: React.FC<TodoListProps> = ({initialTodos}) => {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    const [fullTodo, setFullTodo] = useState<Todo[]>(initialTodos);
    const [filter, setFilter] = useState(0);

    function addTodo(t: string) {
        const create = document.getElementById(t) as HTMLInputElement | null;
        if (create) {
            if (create.value !== ""){
            const newTodo: Todo = {userId: 1, id: Date.now(), completed: false, title: create.value }
                setTodos([...todos, newTodo])
                setFullTodo([...todos, newTodo]);
            } else {
                alert("Title Should not Be Empty");
            }
         }
    }
    
    function editTodo(id: number, value: string) {
        if (value !== "") {
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                return { ...todo, title: value };
            } else {
                return todo;
            }
        }
            
        ))
        setFullTodo(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                return { ...todo, title: value };
            } else {
                return todo;
            }
        }
            
        ))
        } else {
            alert("Please enter a title.")
        }   
    }
    
    function deleteTodo(id: number) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        setFullTodo(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    function toggleTodo(id: number) {
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
        }
        ));
        setFullTodo(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
        }
        ));
    }

    function filterTodo() {
        if (filter === 0) {
            setFilter(1)
            setTodos(fullTodo.filter(todo => !todo.completed))
  
        } else if (filter === 1) {
            setFilter(2)
            setTodos(fullTodo.filter(todo => todo.completed))

        } else {
            setFilter(0)
            setTodos(fullTodo)

        }
    }
    
    return (
        <div>
            <p id="title">Todo List:</p>
            <input id="create" placeholder="Create New Todo"></input>
            <button onClick={() => addTodo("create")}>Create</button>
            <button onClick={() => filterTodo()}>Filter By Completed</button>
            {todos.map((todo) => {
        return (
            <div key={todo.id}>
                <span>Todo:</span>
                <input

                    type="text"
                    value={todo.title}
                    onChange={e => editTodo(todo.id, e.target.value)}/>
                    <span>Completed: {todo.completed ? "True " : "False"}</span>
                    <button onClick={() => toggleTodo(todo.id)}>Completed</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>

            </div>
        );
    })}
</div>

    );
}



export default TodoList;