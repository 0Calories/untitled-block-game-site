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
  const { state, graphQLClient } = useContext(AuthContext);
  const [character, setCharacter] = useState({ name: 'N/A', bobux: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const response = await graphQLClient.request(myCharacter);
      setCharacter(response.myCharacter);
    };

    if (state.isAuthenticated) {
      fetchData();
    }
  }, [graphQLClient, state.isAuthenticated]);


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
    </div>
  );
};

export default Navbar;
