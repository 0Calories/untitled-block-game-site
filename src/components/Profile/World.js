const World = ({ world }) => {

  return (
    <div className="world-container">
      <div className="world">
        <p className="world-name">{world.name}</p>
        <div className="world-body">
          <div className="world-thumbnail">
            <img
              src={`https://blockgame-world-files.s3.ca-central-1.amazonaws.com/${world.id}/thumbnail.png`}
              alt={world.name}
              onError={(e) => { e.target.onerror = null; e.target.src = process.env.PUBLIC_URL + '/images/baseplate.png' }}
            />
          </div>
          <div className="container-right">
            <div className="world-description">
              <div className="world-description-text">{world.description ? world.description : 'No description available'}</div>
            </div>
            <p className="world-visits">Visits: {world.visits}</p>
            <button className="visit-button">Visit</button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default World;
