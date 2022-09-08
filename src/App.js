//import User from "./components/User"
import './App.css';
import Navbar from './layout/Navbar';
import Users from './components/Users';
import React, { Component } from 'react';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contribute from './pages/Contribute';

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
            <Switch>
              <Route exact path = "/" component={Users}/>
              <Route exact path = "/add" component={AddUser}/>  
              <Route exact path = "/github" component={Contribute}/>
              <Route exact path = "/edit/:id" component={UpdateUser}/>
              <Route component = {NotFound}/>
            </Switch>

                  


        </div>
      </Router>
    );
  }
}
export default App;