import React from "react";  

const Modal = ({ title, onClose, isOpen, texto }) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{texto}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default Modal;