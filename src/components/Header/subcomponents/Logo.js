import React from 'react'

const Logo = ({ type }) => {

   // const [tipo, setTipo] = useState(false);
   // if (type === 'large') {
   //    setTipo(true);
   // }
   // console.log(tipo, type);

   function mobileLogo() {
      return (
         <div className="logo">
            <div className="logo-container">
               <img id="logo-trans" src="assets/img/logo-trans.png" alt="Page Logo" />
               <img id="logo-full" src="assets/img/logo-full.png" alt="Page Logo" />
            </div>
         </div>
      )
   }
   function largeLogo() {
      return (
         <div className="big-logo">
            <div className="logo-container">
               <img id="logo-trans" src="assets/img/logo-trans.png" alt="Page Logo" />
               <img id="logo-full" src="assets/img/logo-full.png" alt="Page Logo" />
            </div>
         </div>
      )
   }
   return (
      type === 'large' ? largeLogo() : mobileLogo()
   );
}

export default Logo