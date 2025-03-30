import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import Tagline from '../Tagline/Tagline';
import logo from './logo.png';
import subjects from './subjects'; // Import the subjects data

const Hero = () => {
  const navigate = useNavigate();

  const handleSubjectClick = (id) => {
    navigate(`/subject/${id}`);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <Tagline />
        <div className="subjects-grid">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="subject-card"
              onClick={() => handleSubjectClick(subject.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={logo} alt={subject.name} className="subject-image" />
              <h3 className="subject-name">{subject.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;