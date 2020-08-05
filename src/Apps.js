import React,{ useState} from 'react';
import './App.css';
import ImageLink from './ImageLink';
import LoadPart from './LoadPart';
import Clarifai from 'clarifai';


// project done with react hooks
// const LoadPart = ({ imageUrl }) => {
//     return(
//         <div>
//             <img className="images" alt='' src={imageUrl}/>
//             {/* <img src={`${imageUrl}`} className="images"  alt='' /> */}
//         </div>
//     );
//    }

// const ImageLink = ({ onInputChange, onButtonSubmit, onScreenClear }) => {
//     return(
//         <div className="container">
//           <form>
//             <input className="input"  onChange = {onInputChange} type='text' />
//             <button onClick ={onButtonSubmit}>Click ME </button>
//             <button onClick ={onScreenClear}>Clear </button>

//           </form>
           
//         </div>
//     )
//    }
 
const app = new Clarifai.App({
  apiKey: '68cb1946fd094445a2813e6e4a984fdf'
 });


 const Cards = ({ info, id }) =>
 <div>
        <h5>
          {info.name} at {info.value x 100}"%"
        </h5>
    {/* <div className="card" >
        <ul className="list-group list-group-flush">
           <li className="list-group-item">  {info.name} at {info.value}</li>
       </ul>
  </div> */}
</div>;


function Apps (){
  const [output, setOutput] = useState([])
  const [food, setFood] = useState(
    {
        input:'',
        imageUrl:'',
    }
  )

  
  const  onInputChange =async (event) =>{
    setFood({...food, input:event.target.value});
  }


 const clearer =()=>{
  setFood({ ...food,imageUrl:''});
}
   
 const onButtonSubmit = event =>{
    event.preventDefault()
    setFood({ ...food,imageUrl:food.input});
    app.models.predict(Clarifai.FOOD_MODEL,food.input)
    .then(
    function(response) {
      let myArray = JSON.stringify(response.outputs[0].data.concepts)
      console.log(JSON.parse(myArray))
      printResult(myArray);
  },
    function(err) {
    console.log(err)
    }
  );
}
  

   const printResult =(myArray)=>{
    setOutput(JSON.parse(myArray))
    // console.log(output)
  }



  const onScreenClear = ({food})=>{
       setFood({ 
       input:'',
       imageUrl:'',});
      setOutput([]);
      clearer()
  }
  return (
      <div className="App">
         <h1 className="texts"> FOOD APP </h1>
         <h2 className="texts"> Guess the ingredients</h2>
        <ImageLink onInputChange = {onInputChange}
             onButtonSubmit = {onButtonSubmit} 
             onScreenClear ={onScreenClear}
             imageUrl= {food.imageUrl}
             />
          <LoadPart imageUrl= {food.imageUrl}/>
        <div>
          {
             output.map((info, id) => (
              <Cards
                  key={id}
                  index={id}
                  info={info}
              />
          ))
          }
        </div>

  
      </div>
    );
  

}

export default Apps;
