import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'; 
import './contactus.css'; 

function ContactUs() {
    return (
        <div className="contact-us-section">
            <h2>Contact Us</h2>
            <ul>
                <li>Email: itsmetrokenaki@gmail.com</li>
                <li>Email: coolblog2024@gmail.com</li>
                <li>Phone: 0712345678</li>
                <li>Phone:0784799266</li>
                <li>Social Media:
                    <ul>
                        <li>Instagram: <a href="https://www.instagram.com/" className="social-link">
                            <FaInstagram size={24} />
                        </a></li>
                        <li>Facebook: <a href="https://web.facebook.com/" className="social-link">
                            <FaFacebook size={24} /> </a></li>
                        <li>Twitter: <a href="https://twitter.com/" className="social-link">
                            <FaTwitter size={24} />
                        </a></li>
                        <li>Github:   <a href="https://github.com/" className="social-link">
                            <FaGithub size={24} />
                        </a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default ContactUs;
