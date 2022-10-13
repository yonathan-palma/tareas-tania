import React from "react";
import './CreateTodoButtom.css'

function CreateTodoButtom(props){
    const onClickButton = ()=>{
        props.setOpenModal(prevState => !prevState);
    }
    return(
        <button 
            className="btn add"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButtom};