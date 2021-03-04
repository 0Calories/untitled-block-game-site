import Loading from './Loading/Loading';

const HomePage = () => {
  return (
    <div className="home-page">
      <Loading />

      <h1>Welcome!</h1>

      <p>
        <span className="bobux-text">Untitled Block Game</span> is a game about building worlds and sharing them with others.
        You can get rewarded with <span className="bobux-text">bobux</span> by having others visit your worlds, which you will be able to spend on special parts for your home world,
        or customizations for your character (not available yet). There's not a whole lot you can do at the moment, but thanks for being a pre-alpha tester!
        Feel free to leave me any feedback or ideas.
      </p>

      <h2>Installation Instructions</h2>
      <ol>
        <li>Download the game from the button below</li>
        <li>Unzip UntitledBlockGame.zip</li>
        <li>Extract the UntitledBlockGame folder that is inside the zip to wherever you want</li>
        <li>Open the folder and run Untitled Block Game.exe</li>
      </ol>

      <h2>How to Play</h2>
      <ul>
        <li>Enter your log in details to load in your home world</li>
        <li>Use WASD to move your character around</li>
        <li>Hold your right mouse button and drag the mouse to pan the camera</li>
        <li>Use your mouse scroll wheel to zoom the camera in/out</li>
        <li>Click anywhere in the world to spawn a block</li>
        <li>Press F1 to save your world and upload it to the server (your home world on your profile will get updated)</li>
      </ul>

      <h2>Windows</h2>
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
