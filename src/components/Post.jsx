
import React, { useState, useEffect } from "react";
import "./posts.css";

function Posts() {
  // State variables to manage posts data, loading state, and error state
  const [posts, setPosts] = useState([]); // Stores the fetched posts
  const [loading, setLoading] = useState(true); // Indicates whether data is being fetched
  const [error, setError] = useState(null); // Stores any error that occurs during fetching

  // useEffect hook to fetch posts data when the component mounts
  useEffect(() => {
    // Fetch posts data from the specified endpoint
    fetch("http://localhost:3000/posts") // Assuming your json-server is running on port 3000
      .then((response) => {
        // Check if the response is ok
        if (!response.ok) {
          // If response is not ok, throw an error
          throw new Error("Network response was not ok");
        }
        // If response is ok, parse the JSON data
        return response.json();
      })
      .then((data) => {
        // Once JSON data is obtained
        console.log("API Response:", data); // Log the data to console
        // Check if data is valid (an array with at least one item)
        if (data && Array.isArray(data) && data.length > 0) {
          // If data is valid, set the posts state variable with the fetched data
          setPosts(data);
        } else {
          // If data is not valid (empty array or non-array), set an error message
          setError("No posts available");
        }
      })
      .catch((error) => {
        // If an error occurs during fetching, catch it here
        console.error("Error fetching data:", error); // Log the error to console
        // Set the error state variable with the error message
        setError(error.message);
      })
      .finally(() => {
        // Finally block runs after either success or failure of fetch operation
        // Set loading state variable to false to indicate fetching is complete
        setLoading(false);
      });
  }, []); // The empty dependency array ensures useEffect runs only once, similar to componentDidMount

  // Conditional rendering based on loading and error states
  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if there's an issue fetching data
  }

  // If no loading or error, render the fetched posts
  return (
    <div className="posts">
      {posts.map((post, index) => (
        // Map over the fetched posts array and render each post
        <div key={index} className="post">
          <img className="postImg" src={post.urlToImage} alt={post.title} />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat">{post.category}</span>
            </div>
            <a href={post.url} className="postTitle">
              {post.title}
            </a>
            <div className="postAuthor">
              <span>Author: {post.author}</span>
            </div>
            <hr />
            <span className="postDate">{post.publishedAt}</span>
            <p className="postDesc">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;