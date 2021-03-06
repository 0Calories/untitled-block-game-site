import { React, useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { gql } from 'graphql-request';

import CashCount from '../CashCount';
import UserMenu from './UserMenu';
import AuthContext from '../../context/AuthContext';

const myCharacter = gql`
  query {
    myCharacter {
      name
      bobux
    }
  }
`;

const Navbar = () => {
  const { state, graphQLClient, dispatch } = useContext(AuthContext);
  const [character, setCharacter] = useState({ name: 'N/A', bobux: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await graphQLClient.request(myCharacter);
        setCharacter(response.myCharacter);
      } catch (error) {
        console.error(error.response.errors[0].message);
        // If an error is caught here, it is most likely because the jwt is expired or invalid
        dispatch({ type: 'LOGOUT' });
      }
    };

    if (state.isAuthenticated) {
      fetchData();
    }
  });


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
          <CashCount bobux={character.bobux} />
        </div>
      }

      {state.isAuthenticated && <UserMenu character={character} />}

      {!state.isAuthenticated &&
        <div className="navbar__login-register">
          <NavLink
            to="/login"
            exact
            className="navbar__login-link"
            activeClassName="navbar__login-link--hidden"
          >
            Log In
          </NavLink>

          <NavLink
            to="/register"
            exact
            className="navbar__register-button"
            activeClassName="navbar__register-button--hidden"
          >
            Sign Up
          </NavLink>
        </div>
      }

    </div>
  );
};

export default Navbar;
