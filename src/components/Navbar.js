import { React, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { dispatch, graphQLClient } = useContext(AuthContext);

  const logOut = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="navbar">
      <Link to="/">Login</Link>
      <Link to="/profile">Profile</Link>
      <a onClick={logOut}>Log Out</a>
    </div>
  );
};

export default Navbar;
