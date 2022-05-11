
import './App.css';
// import udemyLogo from './imagenes/Udemy_logo.svg.png';
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import UdemyLogo from './componentes/UdemyLogo';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val =>{
      setInput(input + val);
  };

  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los calculos');
    }
  }

  return (
    <div className='App'>
      
      <UdemyLogo />
      {/* <div className='udemy-logo-contenedor'> 
        <img src={udemyLogo} className='udemy-logo' alt='Logo de Udemy' />
      </div> */}
      <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
        <div className='fila'> 
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>

        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton  manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClic={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
        
      </div>
    </div>
  );
}

export default App;
