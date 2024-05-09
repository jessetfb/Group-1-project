import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <img className="profilePicture" src="src/assets/cool2.jpeg" alt="cool_logo" />
        <span className="flex justify-center text-3xl font-bold shadow-md hover:text-blue-500 cursor-pointer"> 
         COOl Blog🍹
         </span>

         <div class="bg-slate-400 rounded- shadow-md p-3 text-center"> 
  <h2 class="text-yellow-800 text-2xl font-bold mb-4">Are you passionate about writing and sharing your voice with the world?</h2>
  <p class="text-yellow-800 mb-4">Whether you're a seasoned writer or a budding wordsmith, we invite you to be a part of the Cool Blog community.</p>
  <p class="text-yellow-800 mb-4">Share your stories, express your ideas, and connect with like-minded individuals who share your passion for creativity and knowledge.</p>
  <p class="text-yellow-800 mb-4">Together, let's make Cool Blog the coolest place on the internet for sharing ideas, sparking conversations, and inspiring change.</p>
  <p class="text-yellow-800 font-bold">- COOl Blog 🍹</p>
</div>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle text-lg font-bold mb-4 hover:text-cyan-700 text-gray-800 uppercase tracking-wide">CATEGORIES</span>

        <ul className="sidebarList">
          <li className="sidebarListItem hover:text-blue-500 cursor-pointer font-bold italic ">Life</li>
          <li className="sidebarListItem  hover:text-blue-500 cursor-pointer font-bold italic ">Movies</li>
          <li className="sidebarListItem  hover:text-blue-500 cursor-pointer font-bold italic ">Sport</li>
          <li className="sidebarListItem  hover:text-blue-500 cursor-pointer font-bold italic ">Style</li>
          <li className="sidebarListItem  hover:text-blue-500 cursor-pointer font-bold italic ">Music</li>
          <li className="sidebarListItem  hover:text-blue-500 cursor-pointer font-bold italic ">Tech</li>
        </ul>

      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle text-lg font-bold mb-4 hover:text-cyan-700 text-gray-800 uppercase tracking-wide">FOLLOW US</span>
        <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 hover:text-stone-950">Stay Connected</h3>
              <p className="text-lg hover:text-stone-950">Follow us on social media:</p>
              <div className="flex space-x-4 mt-4 hover:text-stone-950">
                <a href="https://web.facebook.com/" className="text-white hover:text-gray-300">
                  <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com/" className="text-white hover:text-gray-300">
                  <FaTwitter size={24} />
                </a>
                <a href="https://www.instagram.com/" className="text-white hover:text-gray-300">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.linkedin.com/" className="text-white hover:text-gray-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://www.linkedin.com/" className="text-white hover:text-gray-300">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 hover:text-stone-950">Subscribe to our newsletter</h3>
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-gray-800 px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 focus:outline-none hover:text-stone-950"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Sidebar;
