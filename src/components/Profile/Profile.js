const Profile = ({ character }) => {

  return (
    <div className="profile-container">
      <div className="character-pic">
        <img src={process.env.PUBLIC_URL + '/images/bean-cowboy.png'} alt={character.name} />
      </div>

      <div className="character-info">
        <p className="character-name">{character.name}</p>
        <div className="bio">{character.bio}</div>
      </div>
    </div>
  );
};

export default Profile;
