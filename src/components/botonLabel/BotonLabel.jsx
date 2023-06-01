import React, { useState } from "react";
import BotonContexto from "./BotonContexto";

const BotonLabel = ({ children }) => {
    const [label, setLabel] = useState("Label inicial");

    return (
        <BotonContexto.Provider value={{ label, setLabel }}>
            {children}
        </BotonContexto.Provider>
    );
};

export default BotonLabel;