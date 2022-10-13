import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import {TodoCounter} from './TodoCounter/TodoCounter.js';
import { TodoSearch } from './TodoSearch/TodoSearch.js';
import { TodoList } from './TodoList/TodoList.js';
import { TodoItem } from './TodoItem/TodoItem.js';
import { CreateTodoButtom } from './CreateTodoButtom/CreateTodoButtom.js';
import { TodoForm } from "./TodoForm";
import { Modal } from "./Modal/Modal.js";


function AppUI(){
    const {error,
         loading, 
         searchTodos, 
         completeTodosEvent, 
         deleteTodosEvent,
         openModal, 
         setOpenModal
        } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
                <TodoList > 
                    {error && <p>estreme panic..</p>}
                    {loading && <p>Estamos Cargando...</p>}
                    {(!loading && !searchTodos.length) && <p>Crea tu primer todo uwu</p>}
                            
                    {searchTodos.map(todo=>(
                        <TodoItem 
                            key={todo.text} 
                            text={todo.text} 
                            state={todo.completed}
                            onComplete={()=> completeTodosEvent(todo.text)}
                            onDelete={()=> deleteTodosEvent(todo.text)}
                        />
                    ))}
                </TodoList>
                {openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
            <CreateTodoButtom setOpenModal={setOpenModal}/>
        </React.Fragment>
    )
    
}

export {AppUI};