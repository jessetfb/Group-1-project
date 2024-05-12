// Write.jsx
import React, { useState } from 'react';

const Write = () => {
  // State variables for blog post fields
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform blog post submission logic here
    console.log('Blog post submitted:', { title, content });
    // Reset form fields after submission
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Write a Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Write;
