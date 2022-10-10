import React from "react";
import {TodoCounter} from './TodoCounter/TodoCounter.js';
import { TodoSearch } from './TodoSearch/TodoSearch.js';
import { TodoList } from './TodoList/TodoList.js';
import { TodoItem } from './TodoItem/TodoItem.js';
import { CreateTodoButtom } from './CreateTodoButtom/CreateTodoButtom.js';
import { TodoContext } from "../TodoContext/index.js";


function AppUI({}){
    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {({error, loading, searchTodos, onComplete, onDelete})=>{
                    return(
                        <TodoList > 
                            {error && <p>estreme panic..</p>}
                            {loading && <p>Estamos Cargando...</p>}
                            {(!loading && !searchTodos.length) && <p>Crea tu primer todo uwu</p>}
                            
                            {searchTodos.map(todo=>(
                                <TodoItem 
                                    key={todo.text} 
                                    text={todo.text} 
                                    state={todo.completed}
                                    onComplete={()=> onComplete(todo.text)}
                                    onDelete={()=> onDelete(todo.text)}
                                />
                            ))}
                        </TodoList>
                    )
                }}
            </TodoContext.Consumer>
            <CreateTodoButtom />
        </React.Fragment>
    )
    
}

export {AppUI};