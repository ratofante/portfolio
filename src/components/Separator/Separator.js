import React, { useEffect, useState } from 'react'

const Separator = () => {

   const [up, setUp] = useState(null);
   const [down, setDown] = useState(null);

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
      setUp(top[Math.floor(Math.random() * top.length)]);
      setDown(bottom[Math.floor(Math.random() * bottom.length)]);
   }, []);

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