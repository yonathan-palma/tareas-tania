import React from "react";
import "./TodoList.css"

function TodoList(props){

    const rederFunct = props.children || props.render;
    return(
        <section className="TodoList-container">
            {props.error  && props.onError()}
            {props.loading  && props.onLoading()}
            {(!props.loading && !props.todalTodos) && props.onEmpty()}
            {(props.todalTodos && !props.searchTodos.length) && props.onEmptySearchResult(props.searchText)}

            <ul className="tasksList">
                {
                    props.searchTodos.map(todo => rederFunct(todo))
                }
            </ul>
            
            {/* <ul className="tasksList">
                {props.children}
            </ul> */}
        </section>
    );
}

export { TodoList};