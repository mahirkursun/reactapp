//import User from "./components/User"
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import React, { Component } from 'react';
import AddUser from './components/AddUser';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// const Home = () => {
//   return (
//     <h3>Home Page</h3>
//   )
// }
// const About = () => {
//   return (
//     <h3>About Page</h3>
//   )
// }

class App extends Component {
    
    
  render() {
    return (
      
        
      <Router>
     
        <div className="container">     
          <Navbar title ="User App"/>
          <hr/>
          
            <Route exact path = "/"><Users /></Route>
            <Route exact path = "/add"><AddUser /></Route>

        
            
        </div>
      </Router>
    );
  }
}
export default App;