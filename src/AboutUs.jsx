import React, { useState } from 'react';
import './index.css' 
function AboutUs() {
    const [showContactInfo, setShowContactInfo] = useState(false);

    function toggleContactInfo() {
        setShowContactInfo(!showContactInfo);
    }

    return (
        <div className="about-us-container">
            <div className="about-us-section">
                <h2>About Us</h2>
                <p>Welcome to Cool Blog, your go-to destination for exploring sustainable travel adventures with tech-savvy tips and financial insights. Our blog aims to [mission or vision statement].</p>
                <p>Our team is comprised of passionate individuals who share a common interest in Exploring Sustainable Travel Adventures with Tech-Savvy Tips and Financial Insights. We are dedicated to providing high-quality content that informs, inspires, and entertains our readers.</p>
                <h3>Meet Our Team</h3>
                <div className="team-members">
                    <div className="team-member">
                        <img src="[Team Member 1 Photo]" alt="[Team Member 1 Name]" />
                        <p><strong>[Team Member 1 Name]</strong></p>
                        <p>[Team Member 1 Role/Position]</p>
                        <p>[Team Member 1 Bio/Description]</p>
                    </div>
                    <div className="team-member">
                        <img src="[Team Member 2 Photo]" alt="[Team Member 2 Name]" />
                        <p><strong>[Team Member 2 Name]</strong></p>
                        <p>[Team Member 2 Role/Position]</p>
                        <p>[Team Member 2 Bio/Description]</p>
                    </div>
                    <div className="team-member">
                        <img src="[Team Member 3 Photo]" alt="[Team Member 3 Name]" />
                        <p><strong>[Team Member 3 Name]</strong></p>
                        <p>[Team Member 3 Role/Position]</p>
                        <p>[Team Member 3 Bio/Description]</p>
                    </div>
                    <div className="team-member">
                        <img src="[Team Member 4 Photo]" alt="[Team Member 4 Name]" />
                        <p><strong>[Team Member 4 Name]</strong></p>
                        <p>[Team Member 4 Role/Position]</p>
                        <p>[Team Member 4 Bio/Description]</p>
                    </div>
                    <div className="team-member">
                        <img src="[Team Member 5 Photo]" alt="[Team Member 5 Name]" />
                        <p><strong>[Team Member 5 Name]</strong></p>
                        <p>[Team Member 5 Role/Position]</p>
                        <p>[Team Member 5 Bio/Description]</p>
                    </div>
                </div>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>Expertise: Our team consists of industry experts who are passionate about cybersecurity, photography, frontend, and backend development.</li>
                    <li>Quality Content: We leverage our expertise in cybersecurity to ensure the safety and privacy of our readers, while our photography skills capture the essence of each travel adventure in stunning visuals.</li>
                    <li>Community: Join our community of like-minded individuals who share your passion for exploring the world while staying informed about cybersecurity measures and enjoying visually appealing content.</li>
                    <li>Continuous Improvement: We continuously enhance our frontend and backend development skills to deliver a seamless and interactive user experience, making it easier for our readers to navigate and engage with our content.</li>
                    <li>Client-Centric Approach: Our goal is to help our clients receive the best services and information tailored to their needs, ensuring a personalized and satisfying experience.</li>
                </ul>
            </div>
            {showContactInfo ? (
                <div className="contact-us-section">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Email: [Your Email Address 1]</li>
                        <li>Email: [Your Email Address 2]</li>
                        <li>Phone: [Your Phone Number 1]</li>
                        <li>Phone: [Your Phone Number 2]</li>
                        <li>Social Media:
                            <ul>
                                <li>Instagram: [Instagram Link]</li>
                                <li>Facebook: [Facebook Link]</li>
                                <li>Telegram: [Telegram Link]</li>
                                <li>Twitter: [Twitter Link]</li>
                            </ul>
                        </li>
                    <  /ul>
                    <form id="contact-form">
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ) : (
                <div className="contact-button">
                    <button onClick={toggleContactInfo}>Want to Contact Us?</button>
                </div>
            )}
        </div>
    );
}

export default AboutUs;
