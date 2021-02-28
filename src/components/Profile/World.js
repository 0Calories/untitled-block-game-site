const World = ({ world }) => {

  return (
    <div className="world-container">
      <div className="world">
        <p className="world-name">{world.name}</p>
        <div className="world-thumbnail">
          <img src={process.env.PUBLIC_URL + '/images/baseplate.png'} alt={world.name} />
        </div>
        <div className="container-right">
          <div className="world-description">{world.description}</div>
          <p className="world-visits">{world.visits}</p>
          <button className="visit">Visit</button>
        </div>
      </div>
    </div>
  );
};

export default World;
