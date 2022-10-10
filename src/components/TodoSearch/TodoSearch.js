import React, { useState } from "react";
import './TodoSearch.css'

function TodoSearch({ search, setSearch }){
    // const [search, setSearch] = useState(''); 

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