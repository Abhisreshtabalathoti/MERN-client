import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './index.css'; 
import Navbar from './component/navbar'; 
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Register from './component/register'; 
import Login from './component/login';
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(  <div> 
  <Router> 
      <Navbar/> 
      <Register/>
      <Login/>
    <Routes> 
      <Route path="/about" element={<h1>About</h1>}/> 
      <Route path="/register" element={<Register/>}/> 
      <Route path="/login" element={<Login/>}/>
    </Routes> 
  </Router> 
   
 </div> 
);