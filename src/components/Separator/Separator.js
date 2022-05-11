import React, { useEffect, useState } from 'react'

const Separator = ({ type }) => {

   const [up, setUp] = useState(null);
   const [down, setDown] = useState(null);

   const top = [
      "assets/img/separators/down1.svg",
      "assets/img/separators/down2.svg",
      "assets/img/separators/down3.svg"

   ];
   const bottom = [
      "assets/img/separators/up1.svg",
      "assets/img/separators/up2.svg",
      "assets/img/separators/up3.svg"
   ];

   useEffect(() => {
      if (type === 'section') {
         setUp(top[Math.floor(Math.random() * top.length)]);
         setDown(bottom[Math.floor(Math.random() * bottom.length)]);
      } else {
         setUp("assets/img/separators/mobile-footer-down3.svg");
         setDown("assets/img/separators/mobile-footer-up3.svg");
      }

   }, [type]);

   return (<>
      <div className="spacer-container">
         <div
            className="spacer"
            style={{ 'backgroundImage': 'url(' + down + ')' }}>
         </div>
         <div
            className="spacer"
            style={{ 'backgroundImage': 'url(' + up + ')' }}>
         </div>
      </div>
   </>)
}

export default Separator