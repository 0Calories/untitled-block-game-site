const Profile = (props) => {
  const { character } = props;

  return (
    <div>
      <div className="character-pic">
        <img></img>
      </div>

      <div className="character-info">
        <h1>{character.name}</h1>
        <div className="bio">{character.bio}</div>
      </div>
    </div>
  );
};

export default Profile;
