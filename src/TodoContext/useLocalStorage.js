import React, {useState, useEffect} from "react";

function useLocalStorage(itemName , initialValues){
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValues);
  
    useEffect(()=>{
      setTimeout(()=>{
        try {
          // Guardamos nuestro item en una constante
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValues));
            parsedItem = initialValues;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
        } catch (error) {
          setError(error);
        } finally {
          // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
          setLoading(false);
        }  
      }, 1000)
    })
  
    const saveItem =(newItem)=>{
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem);
        // setLoading(false);
      } catch (error) {
        setError(error);
      }  
    }
  
    return{
      item,
      saveItem,
      loading,
      error
    }
}

export {useLocalStorage};