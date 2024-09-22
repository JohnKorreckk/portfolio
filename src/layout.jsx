import React, { useLayoutEffect } from 'react';
import FontStyles from './styles/fontStyles'; // Ensure the import is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap'

export default function RootLayout() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#fdf5e6";
    document.body.style.margin = '0'; // Ensure no margin on the body
  }, []);

  return (
    <div>
      <style>{FontStyles}</style> {/* Include the font styles */}
      <header style={headerStyle}>
        <div style={iconContainerStyle}>
          <text style={{ fontSize: '35px', marginRight: '100px', fontFamily: 'Helvetica', fontWeight: 'Bold' }}>
            JOHN KORRECK
          </text>
          <div style={iconGroupStyle}>
            <a href="https://github.com/johnkorreckk" style={iconStyle}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <span style={labelStyle}>GitHub</span>
          </div>
          <div style={iconGroupStyle}>
            <a href="https://linkedin.com/in/johnkorreck" style={iconStyle}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
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
      <div style={mainContainerStyle}>
        <main style={mainFontStyle}>
          HI! I'M JOHN KORRECK, A COMPUTER SCIENCE STUDENT AT THE MSU COLLEGE OF ENGINEERING.
          I AM DEEPLY PASSIONATE ABOUT:
          <ul style={{ paddingLeft: '20px' }}>
            <li><span style={{ fontStyle: 'italic' }}>ALGORITHM DESIGN</span></li>
            <li><span style={{ fontStyle: 'italic' }}>QUANTITATIVE DEVELOPMENT</span></li>
            <li><span style={{ fontStyle: 'italic' }}>ANYTHING SWE RELATED!</span></li>
          </ul>
          CHECK OUT SOME OF MY PROJECTS BELOW!
        </main>
        <img src='/assets/images/profile.JPEG' alt='John Korreck' style={profileStyle}/>
        <img src='/assets/images/profile2.JPEG' alt='John Korreck' style={profileStyle}/>
      </div>
      <Container>
        <div style = {mainContainerStyle}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cmfsY8cbWgI?si=rkxFzFMBwv8eLA-V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </Container>
    </div>
  );
}

const mainFontStyle = {
  fontFamily: 'Helvetica',
  fontWeight: 'bold',
  fontSize: '34px',
  color: 'black',
  width: '600px', // Set a width to control line length
  whiteSpace: 'normal', // Allow wrapping
  overflowWrap: 'break-word', // Ensure long words break if necessary
};

const profileStyle = {
  height: '400px',
  width: '300px',
};

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'row', // Change to 'row' for horizontal alignment
  alignItems: 'flex-start', // Align items to the top
  justifyContent: 'flex-start',
  gap: '20px', // Space between the main content and the image
  width: '100%', // Adjust the width as needed
  marginTop: '100px', // Gap from the header
  marginLeft: '130px', // Space from the left side of the screen
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'black',
  alignItems: 'center',
  width: '100%',
  height: '80px',
  padding: '0',
  fontSize: '24px',
  color: '#fdf5e6', // Change header text color here
};

const iconContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100',
};

const iconStyle = {
  fontFamily:'Helvetica',
  fontWeight:'Bold',
  color: '#fdf5e6', // Match the header text color
  fontSize: '40px', // Adjust size of icons as needed
  marginRight: '100px',
  marginLeft: '100px'
};

const iconGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const labelStyle = {
  fontFamily:'Helvetica',
  fontWeight:'Bold',
  fontSize: '14px', // Adjust size as needed
  color: '#fdf5e6', // Match the header text color
  marginTop: '5px', // Space between icon and label
};
