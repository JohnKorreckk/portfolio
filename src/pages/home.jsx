import React from 'react';

const Home = () => {
  return (
    <div style={mainContainerStyle}>
      <div style={contentContainerStyle}>
        <main style={mainFontStyle}>
          HI! I'M JOHN KORRECK, A COMPUTER SCIENCE STUDENT AT THE MSU COLLEGE OF ENGINEERING.
          I AM DEEPLY PASSIONATE ABOUT:
          <ul style={{ paddingLeft: '20px' }}>
            <li><span style={{ fontStyle: 'italic' }}>ALGORITHM DESIGN</span></li>
            <li><span style={{ fontStyle: 'italic' }}>QUANTITATIVE DEVELOPMENT</span></li>
            <li><span style={{ fontStyle: 'italic' }}>ANYTHING SWE RELATED!</span></li>
          </ul>
          CHECK OUT SOME OF MY PROJECTS ON <a href="https://github.com/johnkorreckk" target="_blank" rel="noopener noreferrer">GITHUB</a>!
        </main>
        <div style={imageContainerStyle}>
          <img src='/assets/images/profile.JPEG' alt='John Korreck' style={profileStyle} />
          <img src='/assets/images/profile2.JPEG' alt='John Korreck' style={profileStyle} />
        </div>
      </div>
      {/* <div style={videoGridStyle}>
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
      </div> */}
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
  flexDirection: 'column', // Stack everything vertically
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  marginTop: '100px',
  marginLeft: '100px',
};

const contentContainerStyle = {
  display: 'flex',
  flexDirection: 'row', // Align text and images horizontally
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '20px', // Space between text and images
  width: '100%',
};

const imageContainerStyle = {
  display: 'flex',
  gap: '20px', // Space between images
  marginTop: '30px'
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
  marginTop: '200px',
};

const videoWrapperStyle = {
  flex: '1 1 calc(50% - 20px)',
  margin: '10px',
  maxWidth: '600px',
};

export default Home;
