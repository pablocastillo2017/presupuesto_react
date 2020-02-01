import React ,{Fragment, useState}from 'react';



const Pregunta = () => {

    //Definir el State
    const [cantidad, guardarCantidad] = useState(0);

// funcion para leer presupuesto 
// para tener acceso a los valores se le "e" para tener acceso a .target y .value .name
    const definirPresupuesto = e =>{
        // parseInt transforma el string a numero entero
        // lo que se lee de un input usualmente son strings.
        guardarCantidad(parseInt(e.target.value,10)) 
    }

    // Submit para definir el presupuesto

    const agregarPresupuesto = e =>{
        e.preventDefault();

    // Validar

    // si pasa la Validacion     
    }

    return ( 
     <Fragment>

        <h2>Coloca  tu Presupuesto</h2>
        <form
            onSubmit={agregarPresupuesto}
        >
            <input
                type="number"
                className="u-full-width"
                placeholder="Coloca Tu Presupuesto"

                // se va a ejecutar cuando el usuario defina su presupuesto
                onChange={definirPresupuesto}
                
            />

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
            />
        </form>
     </Fragment>

     );
}
 
export default Pregunta;