import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Home from './Home'
import CardingTampltas from './Card6'
import  FormContent from './FormContent'

class App extends Component {
  render() {
    return(
      
      <Router>
          <div className="container">
       <Route exact path="/" component={Home} /> 
        <Route path="/Product" component={CardingTampltas} />  
        <Route path="/Contact" component={FormContent} />  
        <Route path="/ActivationProcess" component={FormContent} />  

        </div>
      </Router>
      )
    }
  }

export default App;
