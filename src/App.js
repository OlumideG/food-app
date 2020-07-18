import React, {Component} from 'react';
import './App.css';
import ImageLink from './ImageLink';
import LoadPart from './LoadPart';
import Clarifai from 'clarifai';


//  Project done with class
const app = new Clarifai.App({
  apiKey: api
 });


 const Cards = ({ info, index }) =>
 <div className="todo">
     <div className="card" style={{ width: "18rem" }}>

         <div className="card-body">
             <h5 className="card-title font-weight-bold text-uppercase form-font">{info.name} at {info.value}</h5>
        </div>
     </div>
 </div>;

// const food ={
//   input:'',
//   imageUrl:'',
// }


class App extends Component{
  constructor(){
    super()
    this.state ={
      input:'',
      imageUrl:'',
    }
   }
  
  
  onInputChange = (event) =>{
    this.setState({input:event.target.value});
  }

   
  onButtonSubmit = () =>{
    this.setState({imageUrl:this.state.input});
    console.log(`image url input: ${this.state.input}`)
    console.log(`image url img: ${this.state.imageUrl}`)
    app.models.predict(Clarifai.FOOD_MODEL,this.state.input)
    .then(
    function(response) {
      let myArray = JSON.stringify(response.outputs[0].data.concepts)
    //  console.log(response.outputs[0].data.concepts)
    console.log(JSON.parse(myArray))
  


   
    
    
    },
    function(err) {
   
    }
  );
  }
  

 render(){

  //  const listItems = myArray.map((food) =>
  //   <li key={food.id}>   {food.value}</li>
  //    )
    return (
      <div className="App">
         <h1 className="texts"> FOOD APP </h1>
         <h2 className="texts"> Guess the ingredients</h2>
        <ImageLink onInputChange = {this.onInputChange}
             onButtonSubmit = {this.onButtonSubmit}  />
          <LoadPart imageUrl= {this.state.imageUrl}/>
          {/* <ul>
          listItems = {listItems}
        </ul> */}
        <div>
          {
             food.map((info, index) => (
              <Cards
                  key={index}
                  index={index}
                  info={info}
                  // deleteReport={deleteReport}
              />
          ))
          }
        </div>
    

  
      </div>
    );
  }

}

export default App;
