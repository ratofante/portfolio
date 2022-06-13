import React, { useEffect } from 'react'
import Logo from '../../Header/subcomponents/Logo'

const FooterLogo = () => {

   const goToTop = () => {
      window.scrollTo({
         'top': 0,
         'left': 0,
         'behavior': 'smooth'
      })
   }

   useEffect(() => {
      const footerLogo = document.getElementById('footerLogo');
      let miniLogo = document.getElementById('minilogo').classList;
      const options = {};
      const observer = new IntersectionObserver(function (entries, observer) {
         entries.forEach(entry => {
            if (entry.isIntersecting === true) {
               miniLogo.remove('mostrar-minilogo');
               miniLogo.add('ocultar-minilogo');
               console.log('observer');
            } else if (entry.isIntersecting === false) {
               miniLogo.remove('ocultar-minilogo');
               miniLogo.add('mostrar-minilogo');
            }
         })
      }, options);
      observer.observe(footerLogo);
   }, []);

   return (<>
      <Logo onClick={() => { goToTop() }} type={'footer-logo'} />
   </>)
}

export default FooterLogo