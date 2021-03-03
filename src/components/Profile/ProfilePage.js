import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const getCharacter = gql`
  query($id: Int!) {
    getCharacter(id: $id) {
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
  const { playerId } = useParams();
  const [character, setCharacter] = useState({});
  const [worlds, setWorlds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Determine whether to display the logged in user's profile, or another
      let response;
      let character;

      if (playerId) {
        response = await graphQLClient.request(getCharacter, { id: parseInt(playerId) });
        character = response.getCharacter;
      } else {
        response = await graphQLClient.request(myCharacter);
        character = response.myCharacter;
      }

      console.dir(response);
      setCharacter(character);
      setWorlds(character.worlds);
    };

    fetchData();
  }, [graphQLClient, playerId]);

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
