import React, { useState, useEffect } from 'react';
import { IoMdDownload as Download } from 'react-icons/io';

const Avatar = ({ avatar }) => {
   const [img, setImg] = useState(null);

   useEffect(() => {
      switch (avatar) {
         case 'avatar1':
            setImg("assets/img/avatar1.jpg");
            break;
         case 'avatar2':
            setImg("assets/img/avatar2.jpg");
            break;
         default:
            setImg("assets/img/avatar1.jpg");
            break;
      }
   }, []);

   return (
      <div className="avatar-wrapper">
         <div className='avatar-main'>
            <div className="avatar-info">
               <h5>Datos: </h5>
               <div className="avatar-datos">
                  <p>Rodrigo González Wilkens</p>
               </div>
               <div className="avatar-datos">
                  <p>28/09/1990</p>
               </div>
               <div className="avatar-datos">
                  <p>Chileno</p>
               </div>
               <div className="avatar-datos">
                  <p>Residente en Buenos Aires, Argentina.</p>
               </div>
            </div>
            <div className="avatar-img">
               <img src={img} alt="avatar-Rodrigo" />
            </div>
         </div>
         <div className="cv-button-container">
            <button className='cv-button'>
               <span className="cv-button-text">CV</span>
               <Download />
            </button>
         </div>
      </div>

   )
}

export default Avatar