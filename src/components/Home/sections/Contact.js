import React from 'react'
import {
   FaLinkedin as Linkedin,
   FaWhatsappSquare as Whatsapp
} from 'react-icons/fa';
import { ImMail as Mail } from 'react-icons/im';

const Contact = () => {
   return (
      <div className='section-wrapper'>
         <div className='text-container'>
            <h2>Contact Me</h2>
            <p>Sea para propuestas laborales, generar redes, propuestas para colaborar.. </p>
            <p>¡Estoy a disposición! </p>
            <p>Puedes contactarme por las siguientes redes:</p>
         </div>
         <div className="contact-gallery">
            <a href="https://www.linkedin.com/in/rodrigo-g-wilkens/" target="_blank" rel='noreferrer' className='contact-button'>
               <Linkedin className='tx-blue' />
            </a>
            <a href="mailto:gwilkens.r@gmail.com" className='contact-button'>
               <Mail className='tx-brown' />
            </a>
            <a href="https://wa.me/5491156140699" target="_blank" rel='noreferrer' className='contact-button'>
               <Whatsapp className='tx-green' />
            </a>
         </div>
      </div>
   )
}

export default Contact