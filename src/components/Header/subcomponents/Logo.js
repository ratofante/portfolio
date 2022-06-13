import React, { useEffect, useState } from 'react'

const Logo = ({ type }) => {

   const [clase, setClase] = useState(null);

   const goToTop = () => {
      window.scrollTo({
         'top': 0,
         'left': 0,
         'behavior': 'smooth'
      })
   }

   useEffect(() => {
      const minilogo = document.getElementById('minilogo');
      const ocultarLogo = () => {
         minilogo.removeEventListener('click', goToTop);
         minilogo.classList.remove('mostrar-minilogo');
         minilogo.classList.add('ocultar-minilogo');
      }
      document.addEventListener('scroll', () => {
         let puntoAltura = window.scrollY;
         if (puntoAltura > 400 && puntoAltura < 2000 && minilogo.classList.contains('ocultar-minilogo')) {
            minilogo.classList.remove('ocultar-minilogo');
            minilogo.classList.add('mostrar-minilogo');
            minilogo.addEventListener('click', goToTop);
         } else if (puntoAltura < 400 && minilogo.classList.contains('mostrar-minilogo')) {
            ocultarLogo();
         }
      });

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
         <div onClick={() => { goToTop() }} className={clase} id={type === 'minilogo' ? 'minilogo' : type === 'footer-logo' ? 'footerLogo' : 'bigLogo'}>
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