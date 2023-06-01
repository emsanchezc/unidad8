import React from "react";

const Tarea = ({ tarea, completa, onCheck }) => {

    return (
        <li>
            <input type="checkbox" checked={completa} onChange={onCheck} />
            {tarea}

            {completa ? <span>Completa</span> : <span>Incompleta</span> }
        </li>
    );

};

export default Tarea;