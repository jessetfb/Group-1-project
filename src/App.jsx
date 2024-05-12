import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from '../src/topbar.jsx';
import ContactUs from '../src/contactUs.jsx'; 
import Home from "../src/home.jsx"
import Register from"../src/register.jsx"
import Login from "../src/login.jsx"
import Write from "../src/write.jsx"
import "./index.css"
import About from "../src/about.jsx"


const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/write' element={<Write />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


import Home from "./pages/Home"
function App() {
 

  return (
    <>
     <Home/> 
    </>
  )
}

export default App


