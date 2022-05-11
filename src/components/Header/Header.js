import React from 'react'
import ButtonNav from '../Component/ButtonNav'
import Separator from '../Separator/Separator'
import Bajada from './subcomponents/Bajada'
import Logo from './subcomponents/Logo'
import Navigation from './subcomponents/Navigation'
import SideHeaderContent from './subcomponents/SideHeaderContent'

const Header = () => {
   return (<>
      <header>
         <div className="top-header">
            <Logo />
            <Navigation />
         </div>
         <div className="bottom-header">
            <Bajada />
            <SideHeaderContent />
            <div className="header-bajada-button">
               <ButtonNav target={'aboutMe'} text={'Go!'} />
            </div>
         </div>
      </header>
      <Separator type={'section'} />
   </>)
}

export default Header