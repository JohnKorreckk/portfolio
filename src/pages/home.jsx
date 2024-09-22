// src/pages/AboutMe.jsx
import React from 'react';

const Home = () => {
  return (
    <div style={mainContainerStyle}>
        <main style={mainFontStyle}>
          HI! I'M JOHN KORRECK, A COMPUTER SCIENCE STUDENT AT THE MSU COLLEGE OF ENGINEERING.
          I AM DEEPLY PASSIONATE ABOUT:
          <ul style={{ paddingLeft: '20px' }}>
            <li><span style={{ fontStyle: 'italic' }}>ALGORITHM DESIGN</span></li>
            <li><span style={{ fontStyle: 'italic' }}>QUANTITATIVE DEVELOPMENT</span></li>
            <li><span style={{ fontStyle: 'italic' }}>ANYTHING SWE RELATED!</span></li>
          </ul>
          CHECK OUT SOME OF MY <a href="projects">PROJECTS</a>
        </main>
        <img src='/assets/images/profile.JPEG' alt='John Korreck' style={profileStyle}/>
        <img src='/assets/images/profile2.JPEG' alt='John Korreck' style={profileStyle}/>
    </div>
  );
};

const mainFontStyle = {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: '34px',
    color: 'black',
    width: '600px', // Set a width to control line length
    whiteSpace: 'normal', // Allow wrapping
    overflowWrap: 'break-word', // Ensure long words break if necessary
};

const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'row', // Change to 'row' for horizontal alignment
    alignItems: 'flex-start', // Align items to the top
    justifyContent: 'flex-start',
    gap: '20px', // Space between the main content and the image
    width: '100%', // Adjust the width as needed
    marginTop: '100px', // Gap from the header
    marginLeft: '100px', // Space from the left side of the screen
  };

const profileStyle = {
  height: '400px',
  width: '300px',
};

export default Home;