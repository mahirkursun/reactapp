//import User from "./components/User"
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import React, { Component } from 'react'

class App extends Component {
  state = {
    users : [
      {
        id : 1,
        name : "Mustafa Murat Coşkun",
        salary : "5000",
        department : "Bilişim"
      },
      {
        id : 2,
        name : "Kemalettin Taslak",
        salary : "4000",
        department : "Pazarlama"
      },
      {
        id : 3,
        name : "Ahmet Tarak",
        salary : "6000",
        department : "Üretim"
      }
      
    ]
  }
  render() {
    return (
      <div className="container">      
          <Navbar title ="User App"/>
          <hr/>
          <Users users ={this.state.users}/>
      </div>
    );
  }
}
export default App;