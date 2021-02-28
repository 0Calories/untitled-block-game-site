import { React, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GraphQLClient } from 'graphql-request';

import AuthContext from './context/AuthContext';
import authReducer from './reducers/authReducer';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import ProfilePage from './components/Profile/ProfilePage';

import './styles/styles.scss';

const API_URL = 'http://untitled-block-game-api.herokuapp.com/';

const graphQLClient = new GraphQLClient(API_URL);

function App() {
  const [state, dispatch] = useReducer(authReducer);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        graphQLClient,
      }}
    >
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
