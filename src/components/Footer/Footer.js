import React from 'react'
import Logo from '../Header/subcomponents/Logo'
import Separator from '../Separator/Separator'
import {
   IoLogoCodepen as Codepen,
   IoLogoGithub as Github,
   IoLogoLinkedin as Linkedin
} from 'react-icons/io';

const Footer = () => {
   return (<>
      <Separator type={'footer'} />
      <footer>
         <div className="title">
            <h2 className="tx-white">LibraDev</h2>
            <p className='tx-white'>by</p>
            <p className="tx-white fw-700">Rodrigo</p>
            <p className="tx-white fw-700">González</p>
            <p className="tx-white fw-700">Wilkens</p>
         </div>

         <Logo type={'footer-logo'} />


         <div className="footer-redes tx-white">
            <a className="footer-redes-link" href="https://codepen.io/ratofante">
               <Codepen />
            </a>
            <a className="footer-redes-link" href="https://github.com/ratofante">
               <Github />
            </a>
            <a className="footer-redes-link" href="https://www.linkedin.com/in/rodrigo-g-wilkens/">
               <Linkedin />
            </a>
         </div>

      </footer>
      <div
         className="spacer"
         style={{
            'backgroundImage': 'url(assets/img/separators/mobile-footer-end.svg)',
            'backgroundColor': 'hsl(var(--clr-blue))'
         }}>
      </div>
   </>)
}

export default Footer