import React from 'react';
import './Contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qbotb4j', 'template_41rkdzm', form.current, 'fKdQuGfoH7Mb-vrAi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    }
  return (
    <section id='contact'>
      <h5>Ponte en contacto</h5>
      <h2>Contáctame</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vanstrahlenalex@gmail.com</h5>
            <a href="mailto:vanstrahlenalex@gmail.com" target='_blank' rel="noreferrer">
              Envia un correo
            </a>
          </article>

          <article className="contact__option">
          <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Van strahlen Alex</h5>
            <a href="https://m.me/alexanderfabian.vanstrahlen/" target='_blank' rel="noreferrer">
              Envia un mensaje
            </a>
          </article>

          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+57 3234840339</h5>
            <a href="https://web.whatsapp.com/send?phone+573234840339" target='_blank' rel="noreferrer">
              Envia un mensaje
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Tu nombre Completo' required/>
          <input type="email" name='email' placeholder='Tu email' required/>
          <textarea name="message" id="" cols="30" rows="10" placeholder='Tu mensaje'></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;