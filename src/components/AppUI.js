import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import {TodoCounter} from './TodoCounter/TodoCounter.js';
import { TodoSearch } from './TodoSearch/TodoSearch.js';
import { TodoList } from './TodoList/TodoList.js';
import { TodoItem } from './TodoItem/TodoItem.js';
import { CreateTodoButtom } from './CreateTodoButtom/CreateTodoButtom.js';
import { TodoForm } from "./TodoForm";
import { Modal } from "./Modal/Modal.js";
import { MyLoader, LoaderVanilla } from "./contentLoader/contentLoader.js";
import { EmpatyTodo } from "./EmptyTodo/EmptyTodo.js";

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
                    {error && <p>extreme panic..</p>}
                    {loading && (<LoaderVanilla />)}
                    {(!loading && !searchTodos.length) && (<EmpatyTodo messege="crea tu primer todo uwu"/>)}
                    {searchTodos.map(todo=>(
                        <TodoItem 
                            key={todo.text} 
                            text={todo.text} 
                            state={todo.completed}
                            onComplete={()=> completeTodosEvent(todo.text)}
                            onDelete={(e)=> deleteTodosEvent(e, todo.text)}
                        />
                    ))}
                    {/* <LoaderVanilla /> */}
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