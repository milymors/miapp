import React from "react";
import './TodoEmpty.css';

function TodoEmpty(){
    return (
        <div className="TodoEmpty-container">
            <p className="TodoEmpty-text">¡Crea tu primera <span>MATERIA</span>!</p>
        </div>
    );
}
export {TodoEmpty};