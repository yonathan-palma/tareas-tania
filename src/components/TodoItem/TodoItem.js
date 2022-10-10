import React from "react";
import item from './item.module.css'

function TodoItem(props){
    let className = props.state ? 'complate' : 'inComplate'
    // console.log(className)
    return(
        <li className={item.tasks}>
            <input 
                type="checkbox" 
                defaultChecked={props.state}
                onClick={props.onComplete}
            >
            </input>
            <p className={props.state ? item.complate : ''}>{props.text}</p>
            <span className={item.remove} onClick={props.onDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </span>
        </li>
    );
}

export { TodoItem };