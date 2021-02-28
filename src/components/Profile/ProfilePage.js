import React, { useContext, useEffect, useState } from 'react';
import { gql } from 'graphql-request';

import AuthContext from '../../context/AuthContext';
import Profile from './Profile';
import World from './World';

const myCharacter = gql`
  query {
    myCharacter {
      id
      name
      colour
      bobux
      bio
      worlds {
        id
        name
        description
        visits
      }
    }
  }
`;

const ProfilePage = () => {
  const { graphQLClient } = useContext(AuthContext);
  const [character, setCharacter] = useState({});
  const [worlds, setWorlds] = useState([]);

  // Fetch the authenticated user's profile
  useEffect(() => {
    const fetchData = async () => {
      const response = await graphQLClient.request(myCharacter);
      console.dir(response);
      setCharacter(response.myCharacter);
      setWorlds(response.myCharacter.worlds);
    };

    fetchData();
  }, [graphQLClient]);

  // const character = {
  //   name: 'Ash',
  //   bio:
  //     'Hey there, I’m the lead (and only) Boblox developer. I like making and playing games in my spare time. Feel free to leave me some feedback on Boblox, it’s a work in progress :)',
  //   pic: 'https://i.pinimg.com/originals/be/e6/60/bee66095c5539c8d1f1e1f247214f330.png'
  // };

  return (
    <div>
      <Profile character={character} />
      {worlds.map((world) => <World world={world} key={world.id} />)}
    </div>
  );
};

export default ProfilePage;
