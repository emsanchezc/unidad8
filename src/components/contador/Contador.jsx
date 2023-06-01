import React, { useState } from "react";
import ContadorContexto from "./ContadorContexto";

const Contador = ({ children }) => {
    const [contador, setContador] = useState(0);

    return(
        <ContadorContexto.Provider value={{ contador, setContador }}>
            {children}
        </ContadorContexto.Provider>
    );
};

export default Contador;