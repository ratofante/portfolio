import React, { useState, useEffect } from 'react';

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
      <div className="avatarWrapper">
         <div className="avatar-separator">
            <img src="assets/img/separators/wave-blue.svg" alt="" />
         </div>
         <div className='avatar-main'>
            <div className="avatar-info">
               <h5>Datos: </h5>
               <div className="avatar-datos">
                  <p>Nombre:</p>
                  <p>Rodrigo</p>
               </div>
               <div className="avatar-datos">
                  <p>Apellido:</p>
                  <p>González Wilkens</p>
               </div>
               <div className="avatar-datos">
                  <p>Fecha de nacimiento:</p>
                  <p>28 de septiembre 1990</p>
               </div>
            </div>
            <div className="avatar-img">
               <img src={img} alt="avatar-Rodrigo" />
            </div>
         </div>
         <div className="avatar-separator">
            <img src="assets/img/separators/wave-green.svg" alt="" />
         </div>
      </div>

   )
}

export default Avatar