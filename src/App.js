import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home.js';
import Contact from './Contact.js';
import Menu from './Menu.js';


function App() {
  return (
    <div>
       <Menu/>
           
    
       <Routes>
        <Route path="/demo-rect-app" exact element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>


    </div>
  );
}

export default App;
