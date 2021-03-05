import React, { useState, useContext } from 'react';
import { gql } from 'graphql-request';
import { useHistory } from 'react-router-dom';

import AuthContext from '../context/AuthContext';
import Loading from './Loading/LoadingModal';

const login = gql`
  mutation($data: LoginInput!) {
    login(data: $data) {
      token
      user {
        id
        username
      }
    }
  }
`;

const LoginForm = () => {
  const history = useHistory();
  const { dispatch, graphQLClient } = useContext(AuthContext);

  // State vars
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const variables = {
      data: {
        username: loginId,
        password
      }
    };

    try {
      setIsLoading(true);
      const response = await graphQLClient.request(login, variables);

      setIsLoading(false);
      setIsDone(true);

      dispatch({
        type: 'LOGIN',
        user: response.login.user,
        token: response.login.token
      });

      graphQLClient.setHeader('Authorization', `Bearer ${response.login.token}`);

      // Let the load complete animation show before continuing
      setTimeout(() => {
        history.push('/players/me');
      }, 1500);
    } catch (error) {
      console.error(error.response.errors[0].message);
      setError(error.response.errors[0].message);
    }
  };

  return (
    <div className="login">
      <h2 className="login-text">Log In</h2>

      <div className="login-box">
        <p className="error-message">{error}</p>
        <form className="login-form">
          <input
            className="input"
            type="text"
            name="loginId"
            placeholder="Username or Email"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-button" type="submit" onClick={handleLogin}>
            Log In
          </button>
        </form>
      </div>

      <Loading
        isLoading={isLoading}
        isDone={isDone}
        includeDoneAnim={true}
        message={'Logging in...'}
        isModal
      />

    </div>
  );
};

export default LoginForm;
