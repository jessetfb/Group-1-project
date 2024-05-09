import "./header.css"; // Importing the CSS file for styling
import React from "react"; // Importing React library

function Header() { // Defining the Header component
  return ( // Returning JSX elements
    <div className="header"> {/* Container for header */}
      <div className="headerTitles"> {/* Container for header titles */}
        <span className="headerTitleSm">Cool</span> {/* Small header title */}
        <span className="headerTitleLg">Blog</span> {/* Large header title */}
      </div>
      <img className="headerImg" src="https://images.pexels.com/photos/163255/sunrise-sun-morgenrot-skies-163255.jpeg?cs=srgb&dl=pexels-pixabay-163255.jpg&fm=jpg" alt="" /> {/* Image for header */}
    </div>
  );
}
export default Header; // Exporting the Header component
