
import './App.css';
import Testimonio from './componentes/Testimonio.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Testimonios de programadores de Udemy</h1>
      <Testimonio 
      nombre='Emma Bostian'
      pais='Argentina'
      imagen='1'
      cargo='Ingeniera de Software'
      empresa='Spotify'
      testimonio='Siempre tuve problemas para arriesgarme al mundo de la programación pero gracias a los cursos gratuitos de Udemy, pude lograrlo, mejoré mis capacidades como programadora y perfeccioné mi ingles ' />
      
      {/* Testimonio 2 */}
      <Testimonio  
      nombre='Alejandro Gonzales'
      pais='Chile'
      imagen='2'
      cargo='Ingeniero de Software'
      empresa='MercadoLibre'
      testimonio='Me enfoqué muchisimo en construirme como programador, afiancé mis capacidades como profesional en javascript gracias a Udemy, Todo lo que he logrado hasta ahora ha sido asumir el riesgo de perder y construir lo que deseo' />
      
      {/* Testimonio 3  */}
      <Testimonio  
      nombre='Carlos Gaviria'
      pais='Colombia'
      imagen='3'
      cargo='Desarrollador Web'
      empresa='Rappi'
      testimonio='Me consideré muy malo en la programación a pesar de haber tomado varios cursos anteriormente, pero gracias a encontrar un curso en especifico como desarrollador Web supé pulir mis habilidades como desarrolador Web' />
      </div>
    </div>
  );
}

export default App;
