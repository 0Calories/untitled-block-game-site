import { React, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GraphQLClient } from 'graphql-request';

import AuthContext from './context/AuthContext';
import authReducer from './reducers/authReducer';
import Navbar from './components/Navbar/Navbar';
import LoginRegisterForm from './components/LoginRegisterForm';
import ProfilePage from './components/Profile/ProfilePage';
import PlayerSearchPage from './components/PlayerSearch/PlayerSearchPage';
import HomePage from './components/HomePage';

import './styles/styles.scss';

const API_URL = 'https://untitled-block-game-api.herokuapp.com/';

const graphQLClient = new GraphQLClient(API_URL);

// Attempt to retrieve the user and token from localStorage
const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));

if (token) {
  graphQLClient.setHeader('Authorization', `Bearer ${token}`);
}

const initialState = {
  isAuthenticated: !!token,
  user,
  token
};

function App() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        graphQLClient
      }}
    >
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login">
            <LoginRegisterForm type={'login'} />
          </Route>
          <Route exact path="/register">
            <LoginRegisterForm type={'register'} />
          </Route>
          {/* <Route path="/profile" component={!state.isAuthenticated ? LoginForm : ProfilePage} /> */}
          <Route exact path="/players" component={PlayerSearchPage} />
          <Route path="/players/:playerId" component={ProfilePage} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
