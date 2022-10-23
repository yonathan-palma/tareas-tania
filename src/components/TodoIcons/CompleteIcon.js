import React from "react";
import { TodoIcons } from "./TodoIcons";

function CompleteIcon({ complete, onComplete }){
    return(
        <TodoIcons 
            type="check"
            color={ complete ? '#4caf50' : 'gray'}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon }