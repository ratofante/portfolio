import React from 'react'
import { Link } from 'react-router-dom'

const SideHeaderContent = () => {
   return (
      <div className='side-header'>
         <h3>Acceso rápido</h3>
         <nav className="side-atajos">
            <Link to={'/cv'} className='side-atajos-item'>
               <span className="side-atajos-span">Curriculum Vitae</span>
               <div className="list-dot">
                  <img src="./assets/img/list-dots/list-dot-1.svg" alt="dot" />
               </div>
            </Link>
            <Link to={'/proyectos'} className='side-atajos-item'>
               <span className="side-atajos-span">Últimos proyectos</span>
               <div className="list-dot">
                  <img src="./assets/img/list-dots/list-dot-2.svg" alt="dot" />
               </div>
            </Link>
            <Link to={'/recursos'} className='side-atajos-item'>
               <span className="side-atajos-span">Recursos</span>
               <div className="list-dot">
                  <img src="./assets/img/list-dots/list-dot-3.svg" alt="dot" />
               </div>
            </Link>
         </nav>
      </div>
   )
}

export default SideHeaderContent