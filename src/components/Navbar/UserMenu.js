import { React, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';

const UserMenu = ({ character }) => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const [isVisible, setVisibility] = useState(false);

  const handleMenuOpen = () => {
    setVisibility(!isVisible);
  }

  const handleAccountClick = () => {
    alert('This feature is not ready yet!');
  }

  const handleProfileClick = () => {
    history.push('/players/me');
  }

  const handleLogOut = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
  }

  return (
    <div className="menu-wrapper">
      <div className="player-button" onClick={handleMenuOpen}>
        <div className="player-button__pic-wrapper">
          <img src={process.env.PUBLIC_URL + '/images/bean-cowboy.png'} alt="player" />
        </div>
      </div>

      <div className={isVisible ? 'user-menu' : 'user-menu user-menu--hidden'}>
        <div className="user-menu__player">
          <div className="user-menu__player__pic-wrapper">
            <img src={process.env.PUBLIC_URL + '/images/bean-cowboy.png'} alt="player" />
          </div>

          <p className="user-menu__player__name">{character.name}</p>
        </div>

        <div className="user-menu-button" onClick={handleAccountClick}>
          <svg className="user-menu-button__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p>My Account</p>
        </div>

        <div className="user-menu-button" onClick={handleProfileClick}>
          <svg className="user-menu-button__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <p>My Profile</p>
        </div>

        <div className="user-menu-button" id="user-menu-logout" onClick={handleLogOut}>
          <svg className="user-menu-button__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#EE5253">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <p>Log Out</p>
        </div>
      </div>
    </div>

  );
};

export default UserMenu;
