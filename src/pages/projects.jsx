import React from 'react';
import { Container } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container style={videoContainerStyle}>
      <div style={videoGridStyle}>
        <div style={videoWrapperStyle}>
          <h2 style={videoHeaderStyle}>S&P 500 SENTIMENT ANALYSIS</h2>
          <p style={videoDescriptionStyle}>
          Created a python web scraper using BeautifulSoup and Transformers libraries 
          that read the most recent news articles about stocks listed on the S&P 500
          </p>
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/cmfsY8cbWgI?si=rkxFzFMBwv8eLA-V"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
        <div style={videoWrapperStyle}>
          <h2 style={videoHeaderStyle}>WASTELESS</h2>
          <p style={videoDescriptionStyle}>Description of the project goes here.</p>
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/cmfsY8cbWgI?si=rkxFzFMBwv8eLA-V"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

const videoContainerStyle = {
  marginTop: '50px',
  textAlign: 'center',
  fontFamily: 'Helvetica',
  fontWeight: 'bold',
  fontSize: '34px',
  color: 'black',
  width: '100%', // Allow full width of the container
};

const videoHeaderStyle = {
  fontFamily: 'Helvetica',
  fontWeight: 'bold',
  fontSize: '34px',
  color: 'black',
  width: '600px', // Set a width to control line length
  whiteSpace: 'normal', // Allow wrapping
  overflowWrap: 'break-word', // Ensure long words break if necessary
};

const videoDescriptionStyle = {
  fontFamily: 'Helvetica',
  fontWeight: 'normal', // Changed to normal for better readability
  fontSize: '20px', // Adjusted font size
  color: 'black',
  width: '600px', // Set a width to control line length
  whiteSpace: 'normal', // Allow wrapping
  overflowWrap: 'break-word', // Ensure long words break if necessary
  fontStyle: 'italic'
};

const videoGridStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '100px',
  flexWrap: 'wrap', // Wrap to the next line if necessary
};

const videoWrapperStyle = {
  flex: '1 1 calc(50% - 20px)', // Two items per row with some spacing
  margin: '10px', // Add margin for spacing
  maxWidth: '600px', // Prevents exceeding the max width
};

export default Projects;