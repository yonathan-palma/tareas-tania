import React from "react";
import ReactDOM from 'react-dom';
import ModalStyle from './ModalStyle.module.css'

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className={ModalStyle.ModalBackground}>
            {children}
        </div>,  
        document.getElementById("modal")
    )
}

export {Modal};