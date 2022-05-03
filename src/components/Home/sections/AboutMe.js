import React from 'react';
import {
   FaGitSquare as Git,
   FaBootstrap as Bootstrap,
   FaLaravel as Laravel,
   FaReact as LogoReact
} from 'react-icons/fa';
import {
   IoLogoJavascript as Js,
   IoLogoHtml5 as Html,
   IoLogoCss3 as Css,
   IoLogoSass as Sass,
   IoLogoNpm as Npm
} from 'react-icons/io';
import {
   SiPhp as Php,
   SiPostcss as PostCss,
   SiJquery as JQuery,
   SiComposer as Composer,
   SiMysql as MySQL
} from 'react-icons/si';
import Avatar from '../../Component/Avatar';

const AboutMe = () => {
   return (
      <div className='section-wrapper'>
         <div className='text-container'>
            <h2>About Me</h2>
            <p>Mi nombre es Rodrigo González Wilkens. Tengo 31 años, nací en Santiago de Chile pero vivo en Buenos Aires, Argentina, desde el 2010.</p>
            <p>Comencé a interesarme en programación y desarrollo web ante la necesidad de gestionar un espacio educativo. Desde entonces, estoy 100% dedicado al desarrollo web.</p>
         </div>
         <Avatar type="avatar1" />
         <div className='skills'>
            <div className='skills-block'>
               <h4>Lenguajes de programación y marcado</h4>
               <div className='skills-block-gallery'>
                  <Js /><Php /><Html /><Css />
               </div>
            </div>
            <div className='skills-block'>
               <h4>Frameworks y librerías</h4>
               <div className='skills-block-gallery'>
                  <Bootstrap /><Laravel /><LogoReact /><JQuery />
               </div>
            </div>
            <div className='skills-block'>
               <h4>Tecnologías</h4>
               <div className='skills-block-gallery'>
                  <Sass /><PostCss /><Git /><Composer /><MySQL /><Npm />
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutMe