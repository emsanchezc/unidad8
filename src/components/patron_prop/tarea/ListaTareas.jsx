import React, { useState } from "react";
import Tarea from "./Tarea";

const ListaTareas = () => {

    const [tareas, setTareas] = useState([
        { id: 1, tarea: "Tarea 1", completa: false },
        { id: 2, tarea: "Tarea 2", completa: false },
        { id: 3, tarea: "Tarea 3", completa: false },
        { id: 4, tarea: "Tarea 4", completa: false },
        { id: 5, tarea: "Tarea 5", completa: false },
    ]);

    const actualizarTarea = (id) => {
        setTareas(tareas.map(tarea => tarea.id === id ? { ...tarea, completa: !tarea.completa } : tarea));
    };

    return (
        <ul>
            {tareas.map((tarea) => (
                <Tarea 
                    key={tarea.id} 
                    tarea={tarea.tarea} 
                    completa={tarea.completa} 
                    onCheck = { actualizarTarea(tarea.id) }
                />
            ))}
        </ul>
    )


};

export default ListaTareas;