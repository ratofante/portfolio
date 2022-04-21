import { useRef, useState } from 'react'

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Navigation = () => {
   const menu = useRef(null);
   const [menuIcon, setMenuIcon] = useState(false);
   const toggleMenu = () => {
      if (menu.current.attributes['aria-expanded'].nodeValue === 'false') {
         menu.current.setAttribute('aria-expanded', 'true');
      } else {
         menu.current.setAttribute('aria-expanded', 'false');
      }
   }

   return (
      <nav>
         <div className="menu-icon">
            <button onClick={() => { toggleMenu(); setMenuIcon(!menuIcon) }}>
               {menuIcon ? <RiCloseFill /> : <RiMenu4Fill />}
            </button>
         </div>
         <div ref={menu} className="navbar-menu" aria-expanded="false">
            <a href="/about" className="nav-item about">About me</a>
            <a href="/work" className="nav-item work">My Work</a>
            <a href="/contact" className="nav-item contact">Contact</a>
         </div>
      </nav>
   )
}

export default Navigation