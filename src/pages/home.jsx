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
        CHECK OUT SOME OF MY PROJECTS BELOW!
      </main>
      <div style={imageContainerStyle}>
        <img src='/assets/images/profile.JPEG' alt='John Korreck' style={profileStyle} />
        <img src='/assets/images/profile2.JPEG' alt='John Korreck' style={profileStyle} />
      </div>
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
    </div>
  );
};

const mainFontStyle = {
  fontFamily: 'Helvetica',
  fontWeight: 'bold',
  fontSize: '34px',
  color: 'black',
  width: '600px',
  whiteSpace: 'normal',
  overflowWrap: 'break-word',
};

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'column', // Change to 'column' to stack elements
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '20px', // Space between main content and images
  width: '100%',
  marginTop: '100px',
  marginLeft: '100px',
};

const imageContainerStyle = {
  display: 'flex',
  gap: '20px', // Space between images
};

const profileStyle = {
  height: '400px',
  width: '300px',
};

const videoHeaderStyle = {
  fontFamily: 'Helvetica',
  fontWeight: 'bold',
  fontSize: '34px',
  color: 'black',
  width: '600px',
  whiteSpace: 'normal',
  overflowWrap: 'break-word',
};

const videoDescriptionStyle = {
  fontFamily: 'Helvetica',
  fontWeight: 'normal',
  fontSize: '20px',
  color: 'black',
  width: '600px',
  whiteSpace: 'normal',
  overflowWrap: 'break-word',
  fontStyle: 'italic',
};

const videoGridStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '100px',
  flexWrap: 'wrap',
};

const videoWrapperStyle = {
  flex: '1 1 calc(50% - 20px)',
  margin: '10px',
  maxWidth: '600px',
};

export default Home;