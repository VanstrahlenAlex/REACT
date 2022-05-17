import React from 'react';
import './Portafolio.css';
import IMG1 from '../../assets/BienesRaices-004.png';
import IMG2 from '../../assets/BlogDeCafe-001.png';
import IMG3 from '../../assets/frelancer-002.png';
import IMG4 from '../../assets/rockfestival-003.png';
import IMG5 from '../../assets/web-development-t.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Bienes Raices',
    github: 'https://github.com/VanstrahlenAlex/DesarrolloWebCompleto',
    demo: 'https://bienesraices-av.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Blog de Café',
    github: 'https://github.com/VanstrahlenAlex/DesarrolloWebCompleto',
    demo: 'https://blogdecafe-ejemplo-2021.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Freelancer',
    github: 'https://github.com/VanstrahlenAlex/DesarrolloWebCompleto',
    demo: 'https://primer-proyecto-web-fl.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Festival de música',
    github: 'https://github.com/VanstrahlenAlex/DesarrolloWebCompleto',
    demo: 'https://edm-festival-musica.netlify.app//'
  },
  {
  id: 5,
  image: IMG5,
  title: 'Portafolio Web Anterior',
  github: 'https://github.com/VanstrahlenAlex/Portafolio',
  demo: 'https://vanstrahlenalex.github.io/Portafolio/index.html'
  }
]


const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>Myis trabajos más recientes</h5>
      <h2>Portafolio</h2>
      <div className="container portafolio__container">
      {
        data.map(({id, image, title, github, demo}) =>{
          return (
            <article key={id} className='portafolio__item'>
            <div className='portafolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portafolio__item-cta'>
            <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Ver</a>
            </div>
          </article>
          )
        })
      }
      </div>
      {/* END OF PROJECT 1 */}
    </section>
  )
}

export default Portafolio;