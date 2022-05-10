import React from 'react'

const ButtonNav = ({ target, text }) => {

   const navButton = (target) => {
      console.log(target, text);
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
   }

   return (
      <button className='button-nav'
         onClick={() => { navButton(target) }}>
         {text ? text : 'Go!'}
      </button>
   )
}

export default ButtonNav