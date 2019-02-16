import React from 'react';
import {Media,Button} from 'react-bootstrap'
import image5 from './Images/image5.jpg'

const Mediam=()=>(
<Media >
  <img style={abg}
    
    className="mr-3"
    src={image5}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h2 style={abg} >
    Roku players starting at $29.99

 </h2>
    <p style={abg}>
    From budget-friendly players to 4K Ultra HD powerhouses, 
    there’s a Roku player for everyone.


    </p>
    <Button style={fg}> Shop Now </Button>
  </Media.Body>
</Media>

)
const abg={
margin:"30px",
padding:"20px",

}

const fg={
padding:"10px",
margin:"30px"
}
export default Mediam;