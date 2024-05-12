// Importing the CSS file for styling
import "./write.css";
import React, { useState } from "react"; // Importing React library

// Defining the Write component
function Write() {
  // State for title input
  const [title, setTitle] = useState("");
  // State for content input
  const [content, setContent] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions like sending data to the server or updating state
    console.log("Title:", title);
    console.log("Content:", content);
  };

  // Returning JSX elements
  return (
    <div className="write"> {/* Container for writing */}
      <img
        className="writeImg"
        src="https://c4.wallpaperflare.com/wallpaper/361/37/200/zebras-in-amboseli-national-park-mount-kilimanjaro-in-southern-kenya-4k-ultra-hd-desktop-wallpapers-for-computers-laptop-tablet-and-mobile-phones-3840%C3%972160-wallpaper-preview.jpg"
        alt=""
      /> {/* Image for writing */}
      <form className="writeForm" onSubmit={handleSubmit}> {/* Form for writing */}
        <div className="writeFormGroup"> {/* Form group for input */}
          <label htmlFor="fileInput"> {/* Label for file input */}
            <i className="writeIcon fa-solid fa-plus"></i> {/* Icon for adding files */}
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} /> {/* File input for adding files */}
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          /> {/* Input field for title */}
        </div>
        <div className="writeFormGroup"> {/* Form group for text area */}
          <textarea
            placeholder="Tell your Story"
            type="text"
            className="writeInput writeText"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea> {/* Text area for writing */}
        </div>
        <button type="submit" className="writeSubmit">Publish</button> {/* Publish button */}
      </form>
    </div>
  );
}

export default Write; // Exporting the Write component
