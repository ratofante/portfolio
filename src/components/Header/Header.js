import React from 'react'
import Separator from '../Separator/Separator'
import Bajada from './subcomponents/Bajada'
import Logo from './subcomponents/Logo'
import Navigation from './subcomponents/Navigation'

const Header = () => {
   return (<>
      <header>
         <div className="top-header">
            <Logo />
            <Navigation />
         </div>
         <div className="bottom-header">
            <Bajada />
         </div>
      </header>
      <Separator />
   </>)
}

export default Header