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
    }
  }
`;

const PlayerSearchPage = () => {
  const { graphQLClient } = useContext(AuthContext);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await graphQLClient.request(getPlayers);
      console.dir(response);
      setCharacters(response.getCharacters);
    };

    fetchData();
  }, [graphQLClient]);

  return (
    <div className="search-page">
      <SearchBar />
      {characters.map((character) => <PlayerRow character={character} />)}
    </div>
  );
};

export default PlayerSearchPage;
