import React from "react";
import { WithStorageListener } from "./WithStorageListener.js";

function ChangeStorage({show, toggleShow}){
    if (show) {
        return <p>Hubo cambios</p>
    }else{
        return null;
    }
   
}

const ChangeAlert = WithStorageListener(ChangeStorage);

export {ChangeAlert};