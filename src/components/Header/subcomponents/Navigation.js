import { useRef, useState } from 'react'

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Navigation = () => {
   const menu = useRef(null);
   const [menuIcon, setMenuIcon] = useState(false);

   const [scroll, setScroll] = useState(false);

   document.addEventListener('scroll', () => {
      let height = window.scrollY;
      height > 50 ? setScroll(true) : setScroll(false);
   })



   // Función para el botón del menú: display toggle. 
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

   const menuBtn = () => {
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
      );
   }
   const menuInicial = () => {
      return (<nav>
         <a href="/about" className="top-link">
            About
         </a>
         <a href="/work" className="top-link">
            My Work
         </a>
         <a href="/contact" className="top-link">
            Contact
         </a>
      </nav>);
   }

   return (
      scroll ? menuBtn() : menuInicial()
   )
}

export default Navigation