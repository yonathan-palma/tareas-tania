import React from "react";
import counter from "./counter.module.css"

function TodoCounter({todalTodos, completeTodos, loading}){
    return(
        <h2 
            className={`${counter.TodoCounter} ${loading && counter.TodoCounter__loading}`}
        >
            Has Completado 
        {completeTodos} de {todalTodos} todos
        </h2>
    )
}

export {TodoCounter};