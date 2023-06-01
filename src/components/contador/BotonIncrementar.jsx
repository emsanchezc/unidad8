import React, { useContext } from "react";
import ContadorContexto from "./ContadorContexto";

const BotonIncrementar = () => {
    const { setContador } = useContext(ContadorContexto);

    return (
        <button onClick={() => setContador((contador) => contador + 1)}>
            Incrementar
        </button>
    );
};

export default BotonIncrementar;