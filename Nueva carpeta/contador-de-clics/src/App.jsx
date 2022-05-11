import './App.css';
import udemyLogo from './imagenes/Udemy_logo.svg.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='udemy-logo-contenedor'>
      <img  className='udemy-logo'
      src={udemyLogo} alt='Logo de Udemy'/>
      </div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
        texto='clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
