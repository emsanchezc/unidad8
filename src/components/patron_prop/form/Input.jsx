import React from "react";

const Input = ({ value, onChange, type, texto }) => {
    return (
        <input
            type={type}
            placeholder={texto}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;