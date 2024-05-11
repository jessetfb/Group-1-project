/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

//import Header from "./Header";
import Posts from "../components/Post";
//import Sidebar from "./Sidebar";
import "./../pages/Home.css"
import React from "react";

function Home() {
  return (

      <>
       
        <div className="home">
          <Posts />
         
        </div>
      </>

  );
}
export default Home;

