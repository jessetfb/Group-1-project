/* eslint-disable no-unused-vars */

import Header from "./Header";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import "./home.css";
import React from "react";

function Home() {
  return (

      <>
        <Header />
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
      </>

  );
}
export default Home;

