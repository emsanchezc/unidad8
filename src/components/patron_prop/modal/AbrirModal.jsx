import React, { useState } from "react";
import Modal from "./Modal";

const AbrirModal = () => {

    const [abierto1, setAbierto1] = useState(false);
    const [abierto, setAbierto] = useState(false);

    const handleOpen = () => {
        setAbierto1(true);
    };

    const handleClose = () => {
        setAbierto1(false);
    };

    const handleAbierto = () => {
        setAbierto(true);
    }

    const handleCerrado = () => {
        setAbierto(false);
    }

    return (
        <div>
            <button disabled={abierto1} onClick={handleOpen}>Abrir Modal 1</button>
            <Modal
                title="Modal"
                texto="Texto de prueba1"
                onClose={handleClose}
                isOpen={abierto1}
            />

            <button disabled={abierto} onClick={handleAbierto}>Abrir Modal 2</button>
            <Modal
                title="Modal 2"
                texto="Texto de prueba 2"
                onClose={handleCerrado}
                isOpen={abierto}
            />
        </div>
    );

};

export default AbrirModal;

