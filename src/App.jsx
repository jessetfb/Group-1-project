
import React from 'react';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import Sidebar from "./components/Sidebar";
import FooterContainer from "./components/FooterContainer";



function App() {
  return (
    <>

      <div className="App">
        <header className="App-header">
          <h1>Welcome to Cool Blog</h1>
        </header>
    
          <AboutUs />
          <ContactUs/>
    
        
          

      </div>


    <Sidebar />
    <FooterContainer />
    </>
  );
}

export default App;
