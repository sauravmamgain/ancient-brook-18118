import React from 'react';
import {Navbar,Nav}from 'react-bootstrap'
import {Link} from 'react-router-dom'


const CustomNavBar=()=> (
<Navbar style={testing} >
    <Nav className="mr-auto">
    <a href='#section1'> 
    <Link to="/">Home</Link>
    </a>
    
    <Link to="/howtosetup"> How to Setup</Link>
    <Link to="/ActivationProcess">Activation Process</Link>
    <Link to="/Product">Product</Link>
    <Link to="/Contact">Contact</Link>


      </Nav>
   
  </Navbar>

)


const testing={
  justifyContent:"flex-end",
  display: "flex",
  boxSizing:" border-box",
  fontWeight: "300",
  fontFamily: "GothamLight,GothamBook,Helvetica,Arial,sans-serif",
  border:"",
  float:"right",
  backgroundColor:"White",
}

export default CustomNavBar;
