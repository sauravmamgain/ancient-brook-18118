import React from 'react';
import {Carousel,CarouselItem, Button}from 'react-bootstrap'
import image1 from './Images/image1.jpg'
import image2 from './Images/image2.png'
import image3 from './Images/image3.png'


const Slider=()=> (

<Carousel>
  <CarouselItem>
    <img
      className="d-block w-100"
      src= {image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={ab}><b> Troubleshooting and Setup </b> </h3>
      <Button const={efg}> Call us now +1 888 399 4111
 </Button>
    </Carousel.Caption>
  </CarouselItem>
  <CarouselItem>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second  slide"
    />

    <Carousel.Caption>
      <h3>We are available 24 hours in working days </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </CarouselItem>
  <CarouselItem>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </CarouselItem>
</Carousel>

)

const efg={
  color:"#236aee"
}

const ab={
fontFamily:"GothamLight,GothamBook,Helvetica,Arial,sans-serif",
}
export default Slider;