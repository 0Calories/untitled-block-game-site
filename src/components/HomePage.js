const HomePage = () => {
  return (
    <div className="home-page">
      <a className="download-button" href="https://blockgame-world-files.s3.ca-central-1.amazonaws.com/UntitledBlockGame.zip">
        <svg className="download-button__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
          Download
      </a>
    </div>
  );
};

export default HomePage;
