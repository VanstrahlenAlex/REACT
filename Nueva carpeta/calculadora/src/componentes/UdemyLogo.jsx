import React from "react";
import udemyLogo from '../imagenes/Udemy_logo.svg.png';


const UdemyLogo = () =>{
    return(
    <div className='udemy-logo-contenedor'> 
        <img src={udemyLogo} className='udemy-logo' alt='Logo de Udemy' />
    </div>
    );

};

export default UdemyLogo;