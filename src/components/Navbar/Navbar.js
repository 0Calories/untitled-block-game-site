import { React } from 'react';
import { NavLink } from 'react-router-dom';

import CashCount from '../CashCount';
import UserMenu from './UserMenu';

const Navbar = () => {

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

      <div className="cash-wrapper">
        <CashCount bobux={69420} />
      </div>

      <UserMenu />
    </div>
  );
};

export default Navbar;
