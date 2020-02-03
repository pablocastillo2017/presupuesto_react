import React, {useState} from 'react';
const Formulario = () => (
    <form>
        <h2>Agrega Tus Gastos </h2>

        <div className="campo">
            <label>Nombre Gastos</label>
            <input
                type="text"
                className="u-full-width"
                placeholder="Ej. Transporte"
            />
        </div>

        <div className="campo">
            <label>Cantidad Gastos</label>
            <input
                type="number"
                className="u-full-width"
                placeholder="Ej. 300"
            />
        </div>
        <input
            type="submit"
            className="button-primary u-full-width "
            value="Agregar Gasto"
        />
    </form>
);
 
export default Formulario;