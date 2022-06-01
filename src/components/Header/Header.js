import React, { useEffect } from 'react'
import ButtonNav from '../Component/ButtonNav'
import Separator from '../Separator/Separator'
import Bajada from './subcomponents/Bajada'
import Logo from './subcomponents/Logo'
import Navigation from './subcomponents/Navigation'
import SideHeaderContent from './subcomponents/SideHeaderContent'

const Header = () => {

   const goToTop = () => {
      console.log('trigger');
      window.scrollTo({
         'top': 0,
         'left': 0,
         'behavior': 'smooth'
      })
   }

   useEffect(() => {
      const minilogo = document.getElementById('minilogo');
      document.addEventListener('scroll', () => {
         let puntoAltura = window.scrollY;
         if (puntoAltura > 400 && minilogo.classList.contains('ocultar-minilogo')) {
            minilogo.classList.remove('ocultar-minilogo');
            minilogo.classList.add('mostrar-minilogo');
            minilogo.addEventListener('click', goToTop)
         } else if (puntoAltura < 400 && minilogo.classList.contains('mostrar-minilogo')) {
            minilogo.removeEventListener('click', goToTop);
            minilogo.classList.remove('mostrar-minilogo');
            minilogo.classList.add('ocultar-minilogo');
         }

      });
   })



   return (<>
      <header>
         <div className="top-header">
            <Logo type={'minilogo'} />
            <Logo />
            <Navigation />
         </div>
         <div className="bottom-header">
            <div className="bottom-header-container">
               <Bajada />
               <SideHeaderContent />
            </div>
            <div className="header-bajada-button">
               <ButtonNav target={'aboutMe'} text={'Go!'} />
            </div>
         </div>
      </header>
      <Separator type={'section'} />
   </>)
}

export default Header