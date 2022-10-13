import React from "react";
import { TodoContext } from "../../TodoContext";
import counter from "./counter.module.css"

function TodoCounter(){
    const {todalTodos, completeTodos} = React.useContext(TodoContext);
    return(
        <h2 className={counter.TodoCounter}>Has Completado {completeTodos} de {todalTodos} todos</h2>
    )
}

export {TodoCounter};