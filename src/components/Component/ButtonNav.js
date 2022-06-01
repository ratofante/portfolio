import React, { useEffect } from 'react';

const ButtonNav = ({ target, text }) => {

   useEffect(() => {
      if (target === 'footer') {
         console.log('hey!');
         document.getElementById('projects-link').addEventListener('click', () => {
            console.log('ey');
         });
      }
   })

   const navButton = (target) => {
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
   }

   /* Botón de section Work / Projects */
   if (target === 'projects') {
      return (
         <button className='button-nav' id='projects-link'>
            Go to!
         </button>
      )
   }
   return (
      <button className='button-nav'
         onClick={() => { navButton(target) }}>
         {text ? text : 'Go!'}
      </button>
   )
}

export default ButtonNav