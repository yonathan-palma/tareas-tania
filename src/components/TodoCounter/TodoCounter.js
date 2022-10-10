import React from "react";
import counter from "./counter.module.css"

function TodoCounter({total, completed}){
    return(
        <h2 className={counter.TodoCounter}>Has Completado {completed} de {total} todos</h2>
    )
}

export {TodoCounter};