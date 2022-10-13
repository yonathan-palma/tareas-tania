import React, {useContext, useState} from "react";
import { TodoContext } from "../../TodoContext";
import './TodoForm.css'

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = useState('');
    const {addTodo, setOpenModal } = useContext(TodoContext);

    const onWrite = (e)=>{
        setNewTodoValue(e.target.value);
    }
    const onCalcel = ()=>{
        setOpenModal(false);
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        // console.log(newTodoValue)
    }

    const onKeyUp=()=>{
        //para enviar con enter
    }

    return(
        <form onSubmit={onSubmit} onKeyPress={onKeyUp}>
            <label>Escribe un nuevo todo </label>
            <textarea 
                value={newTodoValue}
                onChange={onWrite}
                placeholder="Cortar la Cebolla"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    onClick={onCalcel}
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                >
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button-add "
                >
                    Anadir
                </button>
            </div>

        </form>
    )
}

export {TodoForm};