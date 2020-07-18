import React from 'react';
import './LoadPart.css';

const LoadPart = ({ imageUrl }) => {
 return(
     <div className="image-holder">
         <img className="images img-fluid" alt='' src={imageUrl}/>
         {/* <img src={`${imageUrl}`} className="images"  alt='' /> */}
     </div>
 );
}

export default LoadPart;