// import React from 'react'
// import "./LastWishesSection.css"
// import whatsaapWall from "../../assets/WhatsAppWall.png";
// import whatsaapWall2 from "../../assets/WhatsApp wall2.png";
// import whatsaapShaving from "../../assets/WhatsAppShaving.png";
// import whatsaapChair from "../../assets/WhatsAppChair.png";
// import whatsaapHeadset from "../../assets/WhatsApp headset.png"
// import smile from "../../assets/smile.jpg";
// import smile2 from "../../assets/smile2.jpg";
// import image1 from "../../assets/image1.jpg";
// import image2 from "../../assets/image2.jpg";
// import image3 from "../../assets/iamge3.jpg";
// import image4 from "../../assets/image4.jpg";
// import image5 from "../../assets/image5.jpg";
// import image6 from "../../assets/image6.jpg";
// import image7 from "../../assets/image7.jpg";

// export default function LastWishesSection() {
//   return (
//     <div className='grid-box'>

// <div className="grid-container">
//       <div className="small">
//         <img src={whatsaapShaving} className='shaving' alt="" />
//         </div>  
//       <div className="small">
//         <img className='smile2' src={smile2} alt="" />
//         </div> 
//       <div className="small">
//         <img src={whatsaapWall2} alt="" className='standing1'/>
//         </div> 
//       <div className="small">4</div>  {/* Far right top small */}
//       <div className="large">
//           <img src={whatsaapWall}/>
//         </div> 
//       <div className="small">
//         <img src={whatsaapHeadset} className='chairHeadset' alt="" />
//         </div>  
//       <div className="large">
//         <img src={image1} className='image1' alt="Large" />
//       </div>  
//       <div className="small">
//         <img src={image2} className='image2' alt="" />
//         </div> 
//       <div className="large">
//         <img src={image3} className='image3' alt="" />
//         </div>  {/* Right large */}
//       <div className="small">
//         <img src={image4} className='image4' alt="" />
//         </div>  
//       <div className="large">
//         <img src={image5} className='image5' alt="" />
//         </div> 
//       <div className="small">
//         <img src={image6} className="image6" alt="" />
//         </div> 
//       <div className="small">
//         <img src={whatsaapChair} className='chair' alt="" />
//         </div>  
//       <div className="small">
//         <img src={image7} className='image7' alt="" />
//         </div> 
//       <div className="small">
//         <img src={smile} className='instagram' alt="" />
//         </div>  {/* Center bottom small */}
//     </div>
//     </div>
//   )
// }



import React from 'react';
import "./LastWishesSection.css";
import whatsaapWall from "../../assets/WhatsAppWall.png";
import whatsaapWall2 from "../../assets/WhatsApp wall2.png";
import whatsaapShaving from "../../assets/WhatsAppShaving.png";
import whatsaapChair from "../../assets/WhatsAppChair.png";
import whatsaapHeadset from "../../assets/WhatsApp headset.png";
import smile from "../../assets/smile.jpg";
import smile2 from "../../assets/smile2.jpg";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/iamge3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";

export default function LastWishesSection() {
  return (
    <div className='grid-box'>
      <div className="grid-container">
        <div className="small">
          <img src={whatsaapShaving} className='shaving animated-image' alt="" />
        </div>
        <div className="small">
          <img className='smile2 animated-image' src={smile2} alt="" />
        </div>
        <div className="small">
          <img src={whatsaapWall2} alt="" className='standing1 animated-image'/>
        </div>
        <div className="small">4</div>
        <div className="large">
          <img src={whatsaapWall} alt="" />
        </div>
        <div className="small">
          <img src={whatsaapHeadset} className='chairHeadset animated-image' alt="" />
        </div>
        <div className="large">
          <img src={image1} className='image1 animated-image' alt="Large" />
        </div>
        <div className="small">
          <img src={image2} className='image2 animated-image' alt="" />
        </div>
        <div className="large">
          <img src={image3} className='image3 animated-image' alt="" />
        </div>
        <div className="small">
          <img src={image4} className='image4 animated-image' alt="" />
        </div>
        <div className="large">
          <img src={image5} className='image5 animated-image' alt="" />
        </div>
        <div className="small">
          <img src={image6} className='image6 animated-image' alt="" />
        </div>
        <div className="small">
          <img src={whatsaapChair} className='chair animated-image' alt="" />
        </div>
        <div className="small">
          <img src={image7} className='image7 animated-image' alt="" />
        </div>
        <div className="small">
          <img src={smile} className='instagram animated-image' alt="" />
        </div>
      </div>
    </div>
  );
}
