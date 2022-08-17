import React from "react";
import './TodoLoading.css';

function TodoLoading({error}){
    return (
        //<p>Estamos cargando, no desesperes...</p>; <span className="TodoLoading-completeIcon"></span> . <span className="TodoLoading-deleteIcon"></span>
        <div className="TodoLoading-container">
            
            <p className="TodoLoading-text">Cargando Materias...</p>
            
        </div>

    );
}
export {TodoLoading};