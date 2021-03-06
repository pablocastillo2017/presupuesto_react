import React, {useState} from 'react';
import Error from './Error';


const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    const agregarGasto = e =>{
        e.preventDefault();

        // Validar

        if (cantidad < 1 || isNaN(cantidad) || nombre.trim()==='') {
            guardarError(true);
            return;
        }
        // Elimina el mensaje previo , dejandolo en False.
        guardarError(false);

        // construir el gasto

        // pasar el gasto al componente principal

        // resetar el Form


    }

    return(
    
    <form
        onSubmit={agregarGasto}
    >
        <h2>Agrega Tus Gastos </h2>
        {/* Mensaje del Error ,usando su respectivo componente */}
        {error ? <Error mensaje="Campos Obligatirios y/o Presupuesto 
        Incorrecto"/>:null}

        <div className="campo">
            <label>Nombre Gastos</label>
            <input
                type="text"
                className="u-full-width"
                placeholder="Ej. Transporte"
                value={nombre}
                onChange={e => guardarNombre(e.target.value)}
            />
        </div>

        <div className="campo">
            <label>Cantidad Gastos</label>
            <input
                type="number"
                className="u-full-width"
                placeholder="Ej. 300"
                value={cantidad}
                onChange={e => guardarCantidad(parseInt(e.target.value,10))}
            />
        </div>
        <input
            type="submit"
            className="button-primary u-full-width "
            value="Agregar Gasto"
        />
    </form>
    
    );
}
    

 
export default Formulario;