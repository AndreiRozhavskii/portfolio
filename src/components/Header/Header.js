import React, { useEffect, useState } from 'react';
import './Header.css';
import { LiaLaptopCodeSolid } from "react-icons/lia";

const Header = () => {
  const [text, setText] = useState("Hi! I'm Andrei and welcome to My Portfolio.");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const phrases = [
      "Passionate about web development.",
      "Specializing in React and Node.js.",
      "Creating modern and responsive applications.",
      "Focused on clean and efficient code.",
      "Skilled in problem-solving and troubleshooting.",
      "Committed to delivering robust and secure applications."
    ];

    const createAnimatedText = (text) => {
      return text.split('').map((letter, i) => (
        `<span class="matrix-letter" style="--i:${i}">${letter === ' ' ? '&nbsp;' : letter}</span>`
      )).join('');
    };

    const setTextContent = (text) => {
      const headerContent = document.querySelector('.header-content');
      headerContent.innerHTML = createAnimatedText(text);
    };

    setTextContent(text); 

    const interval = setInterval(() => {
      setCurrentPhraseIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % phrases.length;
        setTextContent(phrases[nextIndex]);
        return nextIndex;
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, [text]);

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
      <div className="header-content"></div>
    </header>
  );
};

export default Header;

