import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './Hero.css';
import Tagline from '../Tagline/Tagline';
import logo from './logo.png';

const Hero = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]); 
  useEffect(() => {
    axios.get('http://localhost:5000/api/subject')
      .then((response) => {
        setSubjects(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching subjects:', error);
      });
  }, []);

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
