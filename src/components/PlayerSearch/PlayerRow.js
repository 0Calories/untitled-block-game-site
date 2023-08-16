import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import CashCount from '../CashCount';

const PlayerRow = ({ character }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/players/${character.id}`);
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
        <p className="join-date">Joined: {moment(parseInt(character.joinDate)).format('MMMM Do, YYYY')}</p>
        <CashCount bobux={character.bobux} />
      </div>

      <div className="character-bio">
        <p className="bio-text">{character.bio}</p>
      </div>
    </div>
  );
};

export default PlayerRow;
