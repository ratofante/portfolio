import React from 'react'
import ButtonNav from '../../Component/ButtonNav'

const MyWork = () => {
   return (
      <div className='section-wrapper'>
         <div className='text-container'>
            <h2>My Work</h2>
            <p>En esta sección puedes encontrar mis diferentes trabajos y proyectos personales organizados según las tecnologías implementadas.</p>
         </div>
         <div className='header-bajada-button'>
            <ButtonNav target={'projects'} />
         </div>
      </div>
   )
}

export default MyWork