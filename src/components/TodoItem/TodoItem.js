import React from "react";
import item from './item.module.css'
import { CompleteIcon } from "../TodoIcons/CompleteIcon";
import { DeleteIcon } from "../TodoIcons/DeleteIcon";

function TodoItem(props){
    return(
        <li className={item.tasks}>
            <CompleteIcon 
                complete={props.state} 
                onComplete={props.onComplete} 
            />

            <p className={props.state ? item.complate : ''}>{props.text}</p>
            
            <DeleteIcon onDelete={(e)=>{props.onDelete(e)}} />
        </li>
    );
}

export { TodoItem };