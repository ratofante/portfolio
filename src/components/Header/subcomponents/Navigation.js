import { useRef, useState } from 'react'

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Navigation = () => {
   const menu = useRef(null);
   const [menuIcon, setMenuIcon] = useState(false);

   const toggleMenu = () => {
      const links = document.getElementsByClassName('nav-item');

      if (menu.current.attributes['aria-hidden'].nodeValue === 'false') {
         menu.current.setAttribute('aria-hidden', 'true');
         for (let i = 0; i < links.length; i++) {
            links.item(i).setAttribute("aria-hidden", "true");
         }
      } else {
         menu.current.setAttribute('aria-hidden', 'false');
         for (let i = 0; i < links.length; i++) {
            links.item(i).setAttribute("aria-hidden", "false");
         }
      }
   }

   return (
      <nav>
         <div className="menu-icon">
            <button onClick={() => { toggleMenu(); setMenuIcon(!menuIcon) }}>
               {menuIcon ? <RiCloseFill /> : <RiMenu4Fill />}
            </button>
         </div>
         <div ref={menu} className="navbar-menu" aria-hidden="true">
            <a href="/about" className="nav-item about" aria-hidden="true">About me</a>
            <a href="/work" className="nav-item work" aria-hidden="true">My Work</a>
            <a href="/contact" className="nav-item contact" aria-hidden="true">Contact</a>
         </div>
      </nav>
   )
}

export default Navigation