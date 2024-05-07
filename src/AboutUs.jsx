import React, { useState } from 'react';

const AboutUs = () => {
    const [showContactInfo, setShowContactInfo] = useState(false);

    const toggleContactInfo = () => {
        setShowContactInfo(!showContactInfo);
    };

    return (
        <div className="about-us-container">
            <div className="about-us-section">
                <h2>About Us</h2>
                <p>Welcome to [Blog Name], your go-to destination for [topic or niche]. Our blog aims to [mission or vision statement].</p>
                <p>Our team is comprised of passionate individuals who share a common interest in [topic or niche]. We are dedicated to providing high-quality content that informs, inspires, and entertains our readers.</p>
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
                <p>At [Blog Name], we pride ourselves on our commitment to excellence. Here are a few reasons why you should choose us:</p>
                <ul>
                    <li>Expertise: Our team consists of industry experts who are passionate about [topic or niche].</li>
                    <li>Quality Content: We strive to deliver well-researched, informative, and engaging content that adds value to our readers.</li>
                    <li>Community: Join our community of like-minded individuals who share your passion for [topic or niche].</li>
                    <li>Continuous Improvement: We are always seeking ways to improve and enhance the reader experience on our blog.</li>
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
                    </ul>
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
};

export default AboutUs;
