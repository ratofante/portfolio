import React from 'react'
import ButtonNav from '../../Component/ButtonNav'

const Bajada = () => {
   return (<>
      <div className='header-bajada'>
         <h1>LibraDev</h1>
         <p>¡Hola! Mi nombre es Rodrigo González Wilkens. Vivo en Buenos Aires, Argentina. Tengo 31 años, soy desarrollador web y este es mi portfolio.</p>
         <div className="header-bajada-button">
            <ButtonNav target={'aboutMe'} text={'Go!'} />
         </div>
      </div>

   </>)
}

export default Bajada