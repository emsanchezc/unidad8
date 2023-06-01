import React, { useState } from "react";
import Input from "./Input";

const Form = () => {

    const [nombre, setNombre] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");

    const updateNombre = (e) => {
        setNombre(e.target.value);
    };

    const updateCelular = (e) => {
        setCelular(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <Input value={nombre} onChange={updateNombre} type="text" texto="Escriba su nombre" />
            <Input value={celular} onChange={updateCelular} type="number"  texto="Escriba su celular" />
            <Input value={email} onChange={updateEmail} type="email" texto="Escriba su correo" />
            <Input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text"  texto="Escriba su direccion" />
        </div>
    );

};

export default Form;