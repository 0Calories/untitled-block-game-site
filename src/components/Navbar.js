import { React, useContext } from 'react';
// import { Link } from 'react-router-dom';
import CashCount from './CashCount';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { dispatch } = useContext(AuthContext);

  const logOut = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="navbar">
      {/* <Link to="/">Login</Link>
      <Link to="/profile">Profile</Link> */}
      <CashCount bobux={69420} />
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Navbar;
