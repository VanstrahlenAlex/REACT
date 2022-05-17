import React from 'react';
import './Testimoniales.css';
import AVTR1 from '../../assets/assets/avatar1.jpg';
import AVTR2 from '../../assets/assets/avatar2.jpg';
import AVTR3 from '../../assets/assets/avatar3.jpg';
import AVTR4 from '../../assets/assets/avatar4.jpg';

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Katia Vega',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, velit. Nostrum ea, deserunt quisquam sed odio consequuntur praesentium reprehenderit ex unde perferendis quo natus quis corrupti sunt, est officia in!',
  },
  {
    avatar: AVTR2,
    name: 'Antonio Gaviria',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, velit. Nostrum ea, deserunt quisquam sed odio consequuntur praesentium reprehenderit ex unde perferendis quo natus quis corrupti sunt, est officia in!',
  },
  {
    avatar: AVTR3,
    name: 'Pablo Noriega',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, velit. Nostrum ea, deserunt quisquam sed odio consequuntur praesentium reprehenderit ex unde perferendis quo natus quis corrupti sunt, est officia in!',
  },
  {
    avatar: AVTR4,
    name: 'Karla Montenegro',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, velit. Nostrum ea, deserunt quisquam sed odio consequuntur praesentium reprehenderit ex unde perferendis quo natus quis corrupti sunt, est officia in!',
  }
]

const Testimoniales = () => {
  return (
    <section id='testimoniales'>
      <h5>Comentarios de clientes</h5>
      <h2>Testimonios</h2>
      <Swiper className='container testimonials__container'
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
              <img src={avatar} alt="Avatar" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimoniales;