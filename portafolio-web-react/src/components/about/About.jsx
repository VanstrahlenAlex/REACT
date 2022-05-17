import React from 'react';
import './About.css';
import ME from '../../assets/me-about2.jpg';
import {BiNetworkChart} from 'react-icons/bi';
import {BsFillAwardFill} from 'react-icons/bs';
import {VscFolderOpened} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Conóceme</h5>
      <h2>Sobre mi</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src={ME} alt="About Me"/>
          </div>
        </div>
        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
            <BiNetworkChart className='about__icon'/>
              <h5>Experiencia</h5>
              <small>2 años de trabajo</small>
            </article>

            <article className='about__card'>
              <BsFillAwardFill className='about__icon'/>
              <h5>Cursos</h5>
              <small>6 cursos de Desarrollo web</small>
            </article>

            <article className='about__card'>
              <VscFolderOpened className='about__icon'/>
              <h5>Proyectos</h5>
              <small>4 proyectos completados</small>
            </article>
          </div>
          
          <p>
          Soy Ingeniero Electrónico de la ciudad de Valledupar, llevo 2 años de capacitación como programador, he sido capacitado por el proyecto 
          del MINTIC 2022 como programador Junior, también he aprendido gracias a cursos de desarrollo web en Udemy, Coursera y Cisco Academy.
          Me considero una persona con una escucha activa, con mucho interés en los detalles y me siento más atraido por una comunicación asertiva y directa.
          </p>
          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>   
      </div>
    </section>
  )
}
export default About;
