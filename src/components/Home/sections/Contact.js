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
            <button className='contact-button'>
               <Linkedin className='tx-blue' />
            </button>
            <button className='contact-button'>
               <Mail className='tx-brown' />
            </button>
            <button className='contact-button'>
               <Whatsapp className='tx-green' />
            </button>
         </div>
      </div>
   )
}

export default Contact