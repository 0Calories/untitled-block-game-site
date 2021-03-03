import { useHistory } from 'react-router-dom';

import CashCount from '../CashCount';

const PlayerRow = ({ character }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/players/${character.id}`);
  };

  return (
    <div className="character-row" onClick={handleClick}>

      <div className="pic-section">
        <div className="pic-wrapper">
          <img src={process.env.PUBLIC_URL + '/images/bean-cowboy.png'} alt={character.name} />
        </div>
        <p className="name">{character.name}</p>
      </div>

      <div className="character-details">
        <p className="join-date">Joined: Feb 28, 2021</p>
        <CashCount bobux={character.bobux} />
      </div>

      <div className="character-bio">
        <p className="bio-text">{character.bio}</p>
      </div>
    </div>
  );
};

export default PlayerRow;
