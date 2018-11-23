import React, { Component } from 'react';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';
import image8 from './images/8.png';
import image9 from './images/9.png';
import image10 from './images/10.png';
import image11 from './images/11.png';
import image12 from './images/12.png';
import react from './images/react.png';


import './App.css';

var images =[
  {
    id:1,
    url: image1,
    clicked:false
  },
  {
    id:2,
    url: image2,
    clicked:false
  },
  {
    id:3,
    url: image3,
    clicked:false
  },
  {
    id:4,
    url: image4,
    clicked:false
  },
  {
    id:5,
    url: image5,
    clicked:false
  },
  {
    id:6,
    url: image6,
    clicked:false
  },
  {
    id:7,
    url: image7,
    clicked:false
  },
  {
    id:8,
    url: image8,
    clicked:false
  },
  {
    id:9,
    url: image9,
    clicked:false
  },
  {
    id:10,
    url: image10,
    clicked:false
  },
  {
    id:11,
    url: image11,
    clicked:false
  },
  {
    id:12,
    url: image12,
    clicked:false
  },
];

class App extends Component {

  state = {
    images:images,
    score: 0,
    message: "Click any image to begin"
    
  };


  handleimageclick = (id) => {

    let score = this.state.score , message;
    console.log(id);  
    console.log(this.state);
    let allImages = [...this.state.images]
    const isClicked = allImages[id].clicked
    if(!isClicked){
      score++
      message= "You Guessed Incorrectly"
    }else{
      score > 0 && score--
      message="You Guessed Correctly and clicked!"
    }
    allImages[id].clicked =  true
    this.setState( {images:allImages.sort(() => Math.random() - 0.5), score, message})
      
  }



  render() {

    var displayimages = this.state.images.map ((eachitem,index) => 
      <img  key={index} className="click-image"  src={eachitem.url} onClick={() =>this.handleimageclick(index)} alt={eachitem.id}></img>
    )

    return (
      <div className="App">

          <div className="header"> 
            <span> <strong>  Christmas Clicky Game!!!  </strong> </span>
            <span> <strong>  {this.state.message} </strong>  </span>
            <span> <strong>  Score: {this.state.score} </strong>  </span>
            {/* <div className="instructions"> 
              <p>Lets Click!</p>
              <p>Click on an image to earn points, but don't click on any more than once!</p>
            </div> */}
           
          </div>

          <div className="container"> 
               <div className="images"> {displayimages} </div>
          </div>

          <footer className="footer">
            <div className="bottom">
                {/* <img alt="react" src={react}> </img> */}
                <p > <strong> Copyright © 2018 by Gabriela Elizabeth Menocal Cover </strong>  </p>

             </div>
          
          </footer>

        
      </div>
    );
  }
}

export default App;
