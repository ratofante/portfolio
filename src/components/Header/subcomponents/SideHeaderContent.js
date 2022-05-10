import React from 'react'
import { Link } from 'react-router-dom'

const SideHeaderContent = () => {
   return (
      <div className='side-header'>
         <h3>Acceso rápido</h3>
         <ul className="side-atajos">
            <li className='side-atajos-item'>
               <Link to={'/cv'} className="side-atajos-link">Curriculum Vitae</Link>
               <div className="list-dot">
                  <img src="./assets/img/list-dots/list-dot-1.svg" alt="dot" />
               </div>
            </li>
            <li className='side-atajos-item'>
               <Link to={'/proyectos'} className="side-atajos-link">Últimos proyectos</Link>
               <div className="list-dot">
                  <img src="./assets/img/list-dots/list-dot-2.svg" alt="dot" />
               </div>
            </li>
            <li className='side-atajos-item'>
               <Link to={'/recursos'} className="side-atajos-link">Recursos</Link>
               <div className="list-dot">
                  <img src="./assets/img/list-dots/list-dot-3.svg" alt="dot" />
               </div>
            </li>
         </ul>
      </div>
   )
}

export default SideHeaderContent