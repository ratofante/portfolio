import React, { useEffect, useState } from 'react'

const Separator = ({ type }) => {

   const [up, setUp] = useState(null);
   const [down, setDown] = useState(null);

   console.log(type);

   const top = [
      "assets/img/separators/mobile-down1.svg",
      "assets/img/separators/mobile-down2.svg",
      "assets/img/separators/mobile-down3.svg"

   ];
   const bottom = [
      "assets/img/separators/mobile-up1.svg",
      "assets/img/separators/mobile-up2.svg",
      "assets/img/separators/mobile-up3.svg"
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

   console.log('separator render');

   return (<>
      <div className="spacer-container">
         <div
            className="spacer"
            style={{ 'background-image': 'url(' + down + ')' }}>
         </div>
         <div
            className="spacer"
            style={{ 'background-image': 'url(' + up + ')' }}>
         </div>
      </div>
   </>)
}

export default Separator