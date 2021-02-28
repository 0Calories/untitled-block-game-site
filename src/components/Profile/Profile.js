const Profile = (props) => {
  const { character } = props;

  return (
    <div>
      <div className="character-pic">
        <img alt={character.name}></img>
      </div>

      <div className="character-info">
        <h1>{character.name}</h1>
        <div className="bio">{character.bio}</div>
      </div>
    </div>
  );
};

export default Profile;
