//import User from "./components/User"
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {

  return (
    <div className="container">      
        <Navbar title ="User App"/>
        <hr/>
        <User 
        name="Mustafa Murat Coşkun"
        salary ="5000"
        department="Bilişim"
        />
        <User 
        name="Oğuz Artıran"
        salary ="6000"
        department="Bilişim"
        />
    </div>
  );
}

export default App;
