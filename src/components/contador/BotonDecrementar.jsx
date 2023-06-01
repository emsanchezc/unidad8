import React, { useContext } from "react";
import ContadorContexto from "./ContadorContexto";

const BotonDecrementar = () => {
    const { setContador } = useContext(ContadorContexto);

    return (
        <button onClick={() => setContador((contador) => contador - 1)}>
            Decrementar
        </button>
    );
};

export default BotonDecrementar;