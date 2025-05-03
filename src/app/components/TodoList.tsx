'use client'
import { useState } from "react";
import { Todo } from "../types.ts"

interface TodoListProps {
    initialTodos: Todo[];
}

const  TodoList: React.FC<TodoListProps> = ({initialTodos}) => {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    
    return (
        <div>{/* insert JS */}</div>
    );
}

export default TodoList;