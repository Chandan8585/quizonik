import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer d-flex dir-col align-center">
        
      <p>Made by Chandan Pratap</p>
      <div className="icon_container">
        <a
          href="https://github.com/Chandan8585"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://therightfit.netlify.app/assets/github-logo.png"
            alt="GitHub"
            className="icons-image"
          />
        </a>
        <a
          href="https://x.com/chandan8585910"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://therightfit.netlify.app/assets/twitter.png"
            alt="Twitter"
            className="icons-image"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/chandan-pratap-464386154/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://therightfit.netlify.app/assets/linkedin.png"
            alt="LinkedIn"
            className="icons-image"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;