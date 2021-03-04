const UserMenu = () => {
  return (
    <div className="player-button">
      <div className="player-button__pic-wrapper">
        <img src={process.env.PUBLIC_URL + '/images/bean-cowboy.png'} />
      </div>
    </div>
  );
};

export default UserMenu;
