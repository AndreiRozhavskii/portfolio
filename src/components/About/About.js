import React from 'react';
import { useInView } from 'react-intersection-observer';
import { stackList } from "../../data/ProjectData";
import './About.css';

const About = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <section id="about" className="about">
      <div className="container">
        <div className={`about-content ${aboutInView ? 'animate' : ''}`} ref={aboutRef}>
          <div className="about-box">
            <div className="about-text">
              <h2>About Me</h2>
              <p>
              My name is <b>Rozhavskii Andrei</b>. I am eager to gain valuable experience through various entry-level positions, which will significantly enhance my skills, increase productivity, and help me develop into a highly knowledgeable and skilled professional.
              </p>
              <p>
              My journey in the HighTech industry began over 12 years ago. Despite the challenges early in my career, I was able to overcome them through my ability to build strong relationships within the team, openness to requests, and my capacity to address inquiries swiftly and effectively, ultimately growing into a top-tier specialist.
              </p>
              <p>
              Now, after relocating to a new country, I have decided to shift my focus within the HighTech field and become a full-stack developer. Despite this change, I am confident that my experience and personal qualities will enable me to grow rapidly and effectively in the development sphere.
              </p>
              <p> I have become confident using the following technologies:</p>
            </div>
            <div className="tech-icons">
              {stackList.map((tech, index) => (
                <div key={index} className="tech-icon">
                  <img src={tech.img} alt={tech.name} />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
