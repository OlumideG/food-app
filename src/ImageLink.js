import React from 'react';
import './ImageLink.css';

const ImageLink = ({ onInputChange, onButtonSubmit, onScreenClear,food }) => {
 return(
     <div className="container">
         <form>
         <input className="input" onChange = {onInputChange} type='text' />
         <button onClick ={onButtonSubmit}>Click ME </button>
         <button onClick ={onScreenClear}>Clear </button>

         </form>
      
     </div>
 )
}

export default ImageLink;