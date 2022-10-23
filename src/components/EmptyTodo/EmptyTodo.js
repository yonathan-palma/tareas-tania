import React from "react";
import Write from "../../write-svgrepo-com.svg"

function EmpatyTodo(props){
    return(
        <>
            <img className="error" src={Write} alt="Error"/>
            <h3>Vamos!</h3>
            <p>{props.messege}</p>
        </>
    )
}

export {EmpatyTodo};