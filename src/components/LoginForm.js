import React, { useState, useContext } from 'react';
import { gql } from 'graphql-request';

import AuthContext from '../context/AuthContext';

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
  const { dispatch, graphQLClient } = useContext(AuthContext);
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const variables = {
      data: {
        username: loginId,
        password
      }
    };

    try {
      const response = await graphQLClient.request(login, variables);

      dispatch({
        type: 'LOGIN',
        user: response.login.user,
        token: response.login.token
      });

      graphQLClient.setHeader('Authorization', `Bearer ${response.login.token}`);
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
    </div>
  );
};

export default LoginForm;
