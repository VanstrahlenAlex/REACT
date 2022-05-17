import React from 'react';
import './Experience.css';
import {BsFillCreditCard2FrontFill} from 'react-icons/bs';
import {FaServer} from 'react-icons/fa';
import {BsFillPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Habilidades que poseo</h5>
      <h2>Mi experiencia</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__icon'>
            <BsFillCreditCard2FrontFill  />
            </div>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>2 años de Experiencia</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>2 años de Experiencia</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>2 años de Experiencia</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>1 año y medio de Experiencia</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>ReactJS</h4>
                <small className='text-light'>1 año de Experiencia</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>VueJS</h4>
                <small className='text-light'>1 año de Experiencia</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>AngularJS</h4>
                <small className='text-light'>6 meses de Experiencia</small>
                </div>
              </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__icon'>
            <FaServer />
            </div>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>PHP</h4>
                <small className='text-light'>1 año de Experiencia</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>1 año de Experiencia</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Node.Js</h4>
                <small className='text-light'>2 años de Experiencia</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Laragon</h4>
                <small className='text-light'>1 año y medio de Experiencia</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>TablePlus</h4>
                <small className='text-light'>1 año de Experiencia</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Laravel</h4>
                <small className='text-light'>1 año de Experiencia</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>6 meses de Experiencia</small>
                </div>
              </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Experience;