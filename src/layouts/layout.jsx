import React, { useLayoutEffect } from 'react';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FontStyles from '../styles/fontStyles';

const RootLayout = ({ children }) => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#fdf5e6";
    document.body.style.margin = '0';
  }, []);

  return (
    <div>
      <style>{FontStyles}</style>
      <header style={headerStyle}>
        <div style={iconContainerStyle}>
          <text style={{ fontSize: '35px', marginRight: '367px', fontFamily: 'Helvetica', fontWeight: 'Bold' }}>
            JOHN KORRECK
          </text>
          {/* Social Media Icons */}
          <div style={iconGroupStyle}>
            <a href="/" style={iconStyle}>
              <FontAwesomeIcon icon={faHome} />
            </a>
            <span style={labelStyle}>Home</span>
          </div>
          <div style={iconGroupStyle}>
            <Button onClick={() => window.open("https://github.com/johnkorreckk", "_blank")} style={iconStyle}>
              <FontAwesomeIcon icon={faGithub} />
            </Button>
            <span style={labelStyle}>GitHub</span>
          </div>
          <div style={iconGroupStyle}>
          <Button onClick={() => window.open("https://linkedin.com/in/johnkorreck", "_blank")} style={iconStyle}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Button>
            <span style={labelStyle}>LinkedIn</span>
          </div>
          <div style={iconGroupStyle}>
            <a href="mailto:johnkorreck3@gmail.com" style={iconStyle}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <span style={labelStyle}>Email</span>
          </div>
          <div style={iconGroupStyle}>
            <a href='/assets/resume.pdf' style={iconStyle} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFileAlt} />
            </a>
            <span style={labelStyle}>Resume</span>
          </div>
        </div>
      </header>
      <main>
        {children} {/* Render routed components here */}
      </main>
    </div>
  );
};

// Header styles
const headerStyle = {
  display: 'flex',
  justifyContent: 'flex-end', // Align items to the right
  backgroundColor: 'black',
  alignItems: 'center',
  width: '100%',
  height: '80px',
  padding: '0',
  fontSize: '24px',
  color: '#fdf5e6',
};

const iconContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  fontFamily: 'Helvetica',
  fontWeight: 'Bold',
  color: '#fdf5e6',
  fontSize: '40px',
  marginRight: '50px', // Adjusted margin for smaller gap
  marginLeft: '50px', // Adjusted margin for smaller gap
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none'
};

const iconGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const labelStyle = {
  fontFamily: 'Helvetica',
  fontWeight: 'Bold',
  fontSize: '14px',
  color: '#fdf5e6',
  marginTop: '5px',
};

export default RootLayout;