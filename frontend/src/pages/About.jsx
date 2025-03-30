import React from 'react';
import './About.css'; // Import the About.css file

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About TweakStudy</h1>
        <p>
          TweakStudy is your one-stop solution for accessing previous year question papers. 
          Our mission is to help students prepare effectively for their exams by providing 
          a comprehensive collection of question papers from various subjects and courses.
        </p>
        <p>
          Whether you're studying for your semester exams, competitive exams, or just 
          looking to practice, TweakStudy has got you covered. We believe that practice 
          makes perfect, and our platform is designed to make your preparation easier 
          and more efficient.
        </p>
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <h3>Alice Johnson</h3>
            <p>Content Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;