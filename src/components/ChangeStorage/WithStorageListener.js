import React from "react";

function WithStorageListener(WrappedComponent){
    return function WrappedComponentWithStorageListener(){
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1'){
                console.log("Tenemos cambios");
                setStorageChange(true);
            }
            console.log("Tenemos cambios afuera ");
        })
        console.log("Tenemos cambios afuera ");

        return (
            <WrappedComponent 
                show={storageChange} 
                toggleShow={setStorageChange}
            />
        )
    }
}

export {WithStorageListener}