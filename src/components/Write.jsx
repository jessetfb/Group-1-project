import "./write.css"; // Importing the CSS file for styling
import React from "react"; // Importing React library

function Write() { // Defining the Write component
  return ( // Returning JSX elements
    <div className="write"> {/* Container for writing */}
      <img
        className="writeImg"
        src="https://c4.wallpaperflare.com/wallpaper/361/37/200/zebras-in-amboseli-national-park-mount-kilimanjaro-in-southern-kenya-4k-ultra-hd-desktop-wallpapers-for-computers-laptop-tablet-and-mobile-phones-3840%C3%972160-wallpaper-preview.jpg"
        alt=""
      /> {/* Image for writing */}
      <form className="writeForm"> {/* Form for writing */}
        <div className="writeFormGroup"> {/* Form group for input */}
          <label htmlFor="fileInput"> {/* Label for file input */}
            <i className="writeIcon fa-solid fa-plus"></i> {/* Icon for adding files */}
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} /> {/* File input for adding files */}
          <input
            type="Text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          /> {/* Input field for title */}
        </div>
        <div className="writeFormGroup"> {/* Form group for text area */}
          <textarea
            placeholder="Tell your Story"
            type="text"
            className="writeInput writeText"
          ></textarea> {/* Text area for writing */}
        </div>
        <button className="writeSubmit">Publish</button> {/* Publish button */}
      </form>
    </div>
  );
}
export default Write; // Exporting the Write component
