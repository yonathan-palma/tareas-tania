// import './App.css';
import React, { Children, Fragment, useState } from 'react';
import { useTodos } from './useTodos.js';
// import { AppUI } from './components/AppUI.js';
import { TodoHeader } from "./components/TodoHeader/TodoHeader.js";
import {TodoCounter} from './components/TodoCounter/TodoCounter.js';
import { TodoSearch } from './components/TodoSearch/TodoSearch.js';
import { TodoList } from './components/TodoList/TodoList.js';
import { TodoItem } from './components/TodoItem/TodoItem.js';
import { CreateTodoButtom } from './components/CreateTodoButtom/CreateTodoButtom.js';
import { TodoForm } from "./components/TodoForm";
import { Modal } from "./components/Modal/Modal.js";
import { MyLoader, LoaderVanilla } from "./components/contentLoader/contentLoader.js";
import { EmpatyTodo } from "./components/EmptyTodo/EmptyTodo.js";
import { ChangeAlert } from './components/ChangeStorage/ChangeStorage.js';


function App() {
  const {error,
    loading, 
    searchTodos, 
    completeTodosEvent, 
    deleteTodosEvent,
    openModal, 
    setOpenModal,
    todalTodos,
    completeTodos,
    search, 
    setSearch,
    addTodo
   } = useTodos();

   return(
    <React.Fragment>
        <TodoHeader loading={loading}>
            <TodoCounter 
                todalTodos={todalTodos} 
                completeTodos={completeTodos}
                // loading={loading}
            />
            <TodoSearch 
                search={search}
                setSearch={setSearch}
                // loading={loading}
            />
        </TodoHeader>

            <TodoList 
                error={error}
                loading={loading}
                searchTodos={searchTodos}
                todalTodos={todalTodos}
                searchText={search}
                onError={<p>extreme panic..</p>}
                onLoading={()=> <LoaderVanilla />}
                onEmpty={()=> <EmpatyTodo messege="crea tu primer todo uwu"/>}
                onEmptySearchResult={(search)=> <p>No hay resultados para {search} </p>}
                render={(todo)=> (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        state={todo.completed}
                        onComplete={()=> completeTodosEvent(todo.text)}
                        onDelete={()=> deleteTodosEvent(todo.text)}
                    />
                )}
            >
                {/* {todo=>(
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        state={todo.completed}
                        onComplete={()=> completeTodosEvent(todo.text)}
                        onDelete={()=> deleteTodosEvent(todo.text)}
                    />
                )} */}
            </TodoList>
            {/* <TodoList > 
                {error && <p>extreme panic..</p>}
                {loading && (<LoaderVanilla />)}
                {(!loading && !searchTodos.length) && (<EmpatyTodo messege="crea tu primer todo uwu"/>)}
                {searchTodos.map(todo=>(
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        state={todo.completed}
                        onComplete={()=> completeTodosEvent(todo.text)}
                        onDelete={()=> deleteTodosEvent(todo.text)}
                    />
                ))}
                {/* <LoaderVanilla /> */}
            {/* </TodoList> */} 
            
            {openModal && (
                <Modal>
                    <TodoForm
                      addTodo={addTodo} 
                      setOpenModal={setOpenModal} 
                    />
                </Modal>
            )}
        <CreateTodoButtom setOpenModal={setOpenModal}/>
        <ChangeAlert />
    </React.Fragment>
)
}

export default App;
