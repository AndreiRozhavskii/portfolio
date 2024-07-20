import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import { LiaLaptopCodeSolid } from "react-icons/lia";

const Header = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Hi! I'm Andrei and welcome to My Portfolio.",
    "Passionate about web development.",
    "Specializing in React and Node.js.",
    "Creating modern and responsive applications.",
    "Focused on clean and efficient code.",
    "Skilled in problem-solving and troubleshooting.",
    "Committed to delivering robust and secure applications."
  ];

  const phrasesRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [phrases.length]); 

  useEffect(() => {
    const elements = phrasesRef.current;
    elements.forEach((element, index) => {
      element.style.opacity = index === currentPhraseIndex ? '1' : '0';
      element.style.transform = index === currentPhraseIndex ? 'translateY(0)' : 'translateY(20px)';
    });
  }, [currentPhraseIndex]);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <LiaLaptopCodeSolid /> Portfolio Page
        </div>
        <div className="links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="/path/to/your/CV.pdf" className="cv-button" download>
          Download CV
        </a>
      </nav>
      <div id="overlay"></div>
      <div className="header-content">
        <div className="main-phrase">
          {phrases[0]} 
        </div>
        <div className="additional-phrases">
          {phrases.slice(1).map((phrase, index) => (
            <span
              key={index}
              ref={(el) => (phrasesRef.current[index] = el)}
              className="additional-phrase"
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
