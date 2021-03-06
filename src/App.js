import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';


function App() {

  // definir el state
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ restante, guardarRestante] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);


  return (
    <div className="container">
        <header>
            <h1>Gasto Semanal</h1>

            <div className="contenido-principal contenido">
  
  {/* Esto se le conoce como 'Carga condicional de un componente
  ' con un ternario si se cumple "?" se ejecuta "Pregunta"
  sino se cumple ":" se ejecuta Formulario*/}
              { mostrarpregunta ?  
                ( 
                  <Pregunta 
                    guardarPresupuesto={guardarPresupuesto}
                    guardarRestante={guardarRestante}
                    actualizarPregunta={actualizarPregunta}
                  />
                )  :  (
                  <div className="row">
                      <div className="one-half column">
                          <Formulario 
                           
                          />
                      </div>

                      <div className="one-half column">
                          2
      
                      </div>
                  </div>
                ) 
              }
            </div>
        </header>
    </div>
  );
}

export default App;
