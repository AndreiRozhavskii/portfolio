import React, { useState } from 'react';
import { Tooltip, IconButton, Zoom } from '@mui/material';
import { MdContentCopy } from 'react-icons/md';
import { useInView } from 'react-intersection-observer'; 
import './Contact.css';


const LINKEDIN_URL = "https://www.linkedin.com/in/andrei-rozhavskii-07a04a262/";

const Contact = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 }); 

  const copyToClipboard = () => {
    navigator.clipboard.writeText("andrei@rozhavskie.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <section id="contact" className={`contact ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-card">
          <p className="contact-message">
            You can send me a message on <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a> <br />
            <br /> OR <br />
          </p>
          <div className="contact-methods">
            <div className="email-container">
              <div className="email-content">
                <span>andrei@rozhavskie.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard}>
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }} />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn primary-btn"
                href="mailto:andrei@rozhavskie.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
