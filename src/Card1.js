import React from 'react';
import {Card} from 'react-bootstrap'
//import image1 from './Images/image1.jpg'
import image2 from './Images/image2.png'
//import image3 from './Images/image3.png'

const Carding=()=> (
<Card  bg="primary" style={abcd} >
<Card.Title> <h1 style={rs}> Special Title Treatment </h1> </Card.Title>

  <Card.Img variant="top" style={test}  src= {image2} />
   <Card>
    
  </Card>
</Card>

)

const test={
  height:"300px",
  width:"500px",


}

const abcd={
padding:"20px",
margin:"20px",

}

const rs={

color:"white", 
}



export default Carding;
