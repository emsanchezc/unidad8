import React, { useContext } from "react";
import BotonContexto from "./BotonContexto";

const Boton = () => {
    const { setLabel } = useContext(BotonContexto);

    return (
        <button onClick={() => setLabel("Hizo click")}>
            Botón
        </button>
    );
};

export default Boton;