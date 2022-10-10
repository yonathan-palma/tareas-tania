import React from "react";
import './CreateTodoButtom.css'

function CreateTodoButtom(){
    const onClickButton = (msg)=>{
        alert(msg);
    }
    return(
        <button 
            className="btn add"
            onClick={()=> onClickButton('aqui modal jiji')}
        >
            +
        </button>
    );
}

export { CreateTodoButtom};