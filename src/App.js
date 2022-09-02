//import User from "./components/User"
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import React, { Component } from 'react'
import AddUser from './components/AddUser';

class App extends Component {
  
  render() {
    return (
      <div className="container">      
          <Navbar title ="User App"/>
          <hr/>
          <AddUser/>


          <Users />
      </div>
    );
  }
}
export default App;