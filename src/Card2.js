import React from 'react';
import {Card,Button} from 'react-bootstrap'
import image10 from './Images/image10.jpg'


const Cardings=()=> (
<Card style={{ width: '18rem' ,padding:"30px",margin:"30px" }}>
  <Card.Img  variant="top" src={image10} />
  <Card.Body>
    <Card.Title>CANON PIXMA TS6020
</Card.Title>
    <Card.Text>
    Canon Compact TS6020 Wireless Home Inkjet All-in-One Printer, 
    Copier & Scanner, Mobile Printing, Auto Duplex and Business Card Printing, Black

    <Button variant="primary"> Add to Cart </Button>

    </Card.Text>
  </Card.Body>
  
</Card>
)




export default Cardings;