import React, { useContext } from "react";
import BotonContexto from "./BotonContexto";

const Label = () => {
    const { label } = useContext(BotonContexto);

    return (
        <p>{label}</p>
    );
};

export default Label;