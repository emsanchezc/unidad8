import React, { useContext } from "react";
import ContadorContexto from "./ContadorContexto";

const VerContador = () => {
    const { contador } = useContext(ContadorContexto);

    return (
        <p>Contador: {contador}</p>
    );
};

export default VerContador;