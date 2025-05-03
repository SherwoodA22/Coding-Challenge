 import { Todo } from "../types.ts";
 import  TodoList  from "../components/TodoList.tsx";



export default async function GetTodos(){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    
        if (!response.ok) {
            throw new Error();
        }
        const todos: Todo[] = await response.json();
        let current = todos.length;

        while (current != 0) {
            let random = Math.floor(Math.random() * current);
            current--;
            [todos[current], todos[random]] = [todos[random], todos[current]]
        }
        const yourRandomTodos: Todo[] = todos.slice(0, 3);
        console.log(yourRandomTodos);
        return (
            <TodoList initialTodos={yourRandomTodos} />
        );
    } catch (error) {
        console.error(`Error: ${error} initial data could not be loaded`);
        return <div>Failed to load initial todos.</div>;
    }
}



