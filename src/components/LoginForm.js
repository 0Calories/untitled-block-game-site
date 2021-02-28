import React, { useState, useContext } from 'react';
import { gql } from 'graphql-request';

import AuthContext from '../context/AuthContext';

const Login = gql`
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

  const login = async (e) => {
    e.preventDefault();
    console.dir(graphQLClient);
    console.log(`ID: ${loginId}, Password: ${password}`);

    const variables = {
      data: {
        username: loginId,
        password,
      },
    };

    try {
      const response = await graphQLClient.request(Login, variables);
      dispatch({
        type: 'LOGIN',
        user: response.login.user,
        token: response.login.token,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <h2 className="login-text">Log In</h2>

      <div className="login-box">
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

          <button className="login-button" type="submit" onClick={login}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
