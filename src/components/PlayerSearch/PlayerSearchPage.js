import { useState, useContext, useEffect } from 'react';
import { gql } from 'graphql-request';

import AuthContext from '../../context/AuthContext';
import SearchBar from './SearchBar';
import PlayerRow from './PlayerRow';

const getPlayers = gql`
  query($query: String) {
    getCharacters(query: $query) {
      id
      name
      bio
      bobux
      joinDate
    }
  }
`;

const PlayerSearchPage = () => {
  const { graphQLClient } = useContext(AuthContext);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await graphQLClient.request(getPlayers);
      console.dir(response.getCharacters);
      setCharacters(response.getCharacters);
    };

    fetchData();
  }, [graphQLClient]);

  return (
    <div className="search-page">
      <SearchBar setCharacters={setCharacters} graphQLClient={graphQLClient} getPlayers={getPlayers} />
      {characters.map((character) =>
        <PlayerRow character={character} key={character.id} />
      )}
    </div>
  );
};

export default PlayerSearchPage;
