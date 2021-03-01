import { useState, useContext, useEffect } from 'react';
import { gql } from 'graphql-request';

import AuthContext from '../../context/AuthContext';
import SearchBar from './SearchBar';

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
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await graphQLClient.request(getPlayers);
      console.dir(response);
      setPlayers(response.getCharacters);
    };

    fetchData();
  }, [graphQLClient]);

  return (
    <div className="search-page">
      <SearchBar />
      {players.map((player) => <p>{player.name}</p>)}
    </div>
  );
};

export default PlayerSearchPage;
