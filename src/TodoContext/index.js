import React, {createContext, useState} from "react";
import { useLocalStorage } from "./useLocalStorage.js";

const defaultTodos = [
    {text:'Cortar cebolla', completed:true},
    {text:'Tormar el curso de intro a react', completed:false},
    {text:'Llorar con la llorona', completed:false}
  ];
  
const TodoContext = createContext();

function TodoProvider(props){

    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);
 
    const [search, setSearch] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completeTodos = todos.filter(todo=> todo.completed).length;
    const todalTodos = todos.length;
    let searchTodos = [];

    if (search.length <= 0) {
        searchTodos = todos;
    }else{
        searchTodos = todos.filter(todos=>{
        const regex = new RegExp(search, 'gi');
        return todos.text.match(regex);
        })
    }

    const completeTodosEvent = (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }
    const deleteTodosEvent = (e, text)=>{
        e.stopPropagation();
        // const newTodos = todos.filter(todo=>todo.text !== text)
        // saveTodos(newTodos)
        console.log(e.target);
    }

    const addTodo = (text)=>{
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text 
        });
        saveTodos(newTodos)
    }

    //  Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, 
    //  que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
    return(
        <TodoContext.Provider value={{
            loading,           
            error,
            todalTodos, 
            completeTodos, 
            search, 
            setSearch,
            searchTodos,
            completeTodosEvent,
            deleteTodosEvent,
            addTodo,
            openModal, 
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

{/* <TodoContext.Consumer></TodoContext.Consumer> */}

export {TodoContext, TodoProvider};