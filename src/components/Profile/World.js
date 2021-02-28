const World = ({ world }) => {

  return (
    <div className="world-container">
      <p className="world-name"></p>
      <div className="world-thumbnail">
        <img src={process.env.PUBLIC_URL + '/images/bean-cowboy.png'} alt={character.name} />
      </div>

      <div className="character-info">
        <p className="character-name">{character.name}</p>
        <div className="bio">{character.bio}</div>
      </div>
    </div>
  );
};

export default World;
