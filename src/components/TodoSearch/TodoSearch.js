import React, { useState } from "react";
import { TodoContext } from "../../TodoContext";
import './TodoSearch.css'

function TodoSearch(){
    // const [search, setSearch] = useState(''); 

    const { search, setSearch } = React.useContext(TodoContext)
    const onSearchValue = (e)=>{
        setSearch(e.target.value);
    }
    // console.log(search)
    return(
        <input 
            placeholder="Cebolla" 
            className="search" 
            value={search}
            onChange={onSearchValue}
        />
    );
}
export {TodoSearch};