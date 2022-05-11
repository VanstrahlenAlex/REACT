import React from 'react';
import  '../styles/Boton.css';

function Boton(props){
//  considerar un botón un operador 
  const esOperador = (valor) =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }
  return(
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;