import React from "react";
import { AiFillDelete, AiFillCheckCircle } from 'react-icons/ai';
import './TodoIcon.css';



const iconTypes = {
    "check": color => (<AiFillCheckCircle className={`icon-svg icon-check`} color={color}/>),
    "delete": color => (<AiFillDelete className={`icon-svg icon-delete`} color={color}/>)
}
function TodoIcons(props){
    return(
        <span 
            className={`icon-container icon-${props.type}`}
            onClick={props.onClick} 
        >
            {iconTypes[props.type](props.color)}
        </span>
        
    )
}

export { TodoIcons };

