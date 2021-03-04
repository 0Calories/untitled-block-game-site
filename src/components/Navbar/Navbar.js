import { React, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import CashCount from '../CashCount';
import UserMenu from './UserMenu';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
  const { state } = useContext(AuthContext);

  console.log(state.isAuthenticated);


  return (
    <div className="navbar">
      {/* <button onClick={logOut}>Log Out</button> */}
      <NavLink
        to="/"
        exact
        className="navlink"
        activeClassName="navlink__active"
      >
        Home
      </NavLink>

      <NavLink
        to="/players"
        exact
        className="navlink"
        activeClassName="navlink__active"
      >
        Players
      </NavLink>

      {state.isAuthenticated &&
        <div className="cash-wrapper">
          <CashCount bobux={69420} />
        </div>
      }

      {state.isAuthenticated && <UserMenu />}
    </div>
  );
};

export default Navbar;
