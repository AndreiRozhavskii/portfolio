import React from 'react';
import './Sidebar.css';
import { ImGithub } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/andrei-rozhavskii-a936942a3/" target="_blank" rel="noopener noreferrer">
              <GrLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/AndreiRozhavskii" target="_blank" rel="noopener noreferrer">
              <ImGithub className="icon" />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
