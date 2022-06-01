import { useRef, useState, useEffect } from 'react'

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

/* ESTRUCTURA:
   1. Event para chequear scrolleo, de manera de mostrar la navbar entera
      o mostrar el ícono para hacer toggle del menú. 
   2. Funcion para hacer toggle con el menú
   3. Función para scrollear hasta la secxción del LINK 
   4. VIEWS
   5. RETURN 
*/

const Navigation = () => {
   const menu = useRef(null);
   const [menuIcon, setMenuIcon] = useState(false);
   const [scroll, setScroll] = useState(false);

   console.log('nav-render');

   /* 1. Scroll EVENT */

   useEffect(() => {
      console.log(menu);
      document.addEventListener('scroll', () => {
         let height = window.scrollY;
         if (height > 50) {
            setScroll(true);
         } else {
            setScroll(false);
            setMenuIcon(false);
         }
      });
   }, []);

   /* 2. TOGGLE MENU FUNCTION */
   const toggleMenu = () => {
      console.log('toggle');
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

   /* 3. Link / Navigation Functions */



   /* 4. VIEWS */

   const menuBtn = () => {
      return (
         <nav>
            <div className="menu-icon">
               <button onClick={() => { toggleMenu(); setMenuIcon(!menuIcon) }}>
                  {menuIcon ? <RiCloseFill /> : <RiMenu4Fill />}
               </button>
            </div>
            <div ref={menu} className="navbar-menu" aria-hidden="true">
               <button className="nav-item about" aria-hidden="true">About me</button>
               <button className="nav-item work" aria-hidden="true">My Work</button>
               <button className="nav-item contact" aria-hidden="true">Contact</button>
            </div>
         </nav>
      );
   }
   const menuInicial = () => {
      return (<nav>
         <button href="/about" className="top-link">
            About
         </button>
         <button href="/work" className="top-link">
            My Work
         </button>
         <button href="/contact" className="top-link">
            Contact
         </button>
      </nav>);
   }

   /* 5. RETURN */

   return (
      scroll ? menuBtn() : menuInicial()
   )
}

export default Navigation