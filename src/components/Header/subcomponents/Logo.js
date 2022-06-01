import React, { useEffect, useState } from 'react'

const Logo = ({ type }) => {

   const [clase, setClase] = useState(null);

   useEffect(() => {
      switch (type) {
         case 'large':
            setClase('big-logo');
            break;
         case 'footer-logo':
            setClase('footer-logo');
            break;
         case 'minilogo':
            setClase('minilogo ocultar-minilogo');
            break;
         default:
            setClase('logo');
            break;
      }
   }, [type]);

   function logo() {
      return (
         <div className={clase} id={type === 'minilogo' ? 'minilogo' : ''}>
            <div className="logo-container">
               <img id="logo-trans" src="assets/img/logo-trans.png" alt="Page Logo" />
               <img id="logo-full" src="assets/img/logo-full.png" alt="Page Logo" />
            </div>
         </div>
      )
   }
   return (
      logo()
   );
}

export default Logo