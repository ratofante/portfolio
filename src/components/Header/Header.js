import React, { useEffect } from 'react'
import ButtonNav from '../Component/ButtonNav'
import Separator from '../Separator/Separator'
import Bajada from './subcomponents/Bajada'
import Logo from './subcomponents/Logo'
import Navigation from './subcomponents/Navigation'
import SideHeaderContent from './subcomponents/SideHeaderContent'

const Header = () => {
   useEffect(() => {

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