import React, { useState, useContext } from 'react';
import { gql } from 'graphql-request';
import { useNavigate } from 'react-router-dom';

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

const createUser = gql`
  mutation($data: CreateUserInput!) {
    createUser(data: $data) {
      token
      user {
        id
        username
      }
    }
  }
`;

const LoginRegisterForm = ({ type }) => {
  const navigate = useNavigate();
  const { dispatch, graphQLClient } = useContext(AuthContext);

  // State vars
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Registration state vars
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

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
        navigate('/players/me');
      }, 1500);
    } catch (error) {
      console.error(error.response.errors[0].message);
      setError(error.response.errors[0].message);
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // First off, verify that the password and confirm passwords match
    if (password !== confirmPass) {
      setError('Passwords do not match');
      return;
    }

    const variables = {
      data: {
        username,
        email,
        password
      }
    };

    try {
      setIsLoading(true);
      const response = await graphQLClient.request(createUser, variables);

      setIsLoading(false);
      setIsDone(true);

      dispatch({
        type: 'LOGIN',
        user: response.createUser.user,
        token: response.createUser.token
      });

      graphQLClient.setHeader('Authorization', `Bearer ${response.createUser.token}`);

      // Let the load complete animation show before continuing
      setTimeout(() => {
        navigate('/players/me');
      }, 1500);
    } catch (error) {
      console.dir(error);
      console.error(error.response.errors[0].message);
      setError(error.response.errors[0].message);
      setIsLoading(false);
    }
  };

  const getLoginJSX = () => (
    <div className="login-form">
      <h2 className="form-text">Log In</h2>

      <div className="form-box">
        <p className="error-message">{error}</p>
        <form className="main-form">
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

          <button className="form-button" type="submit" onClick={handleLogin}>
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

  const getRegisterJSX = () => (
    <div className="register-form">
      <h2 className="form-text">Sign Up</h2>

      <div className="form-box">
        <p className="error-message">{error}</p>
        <form className="main-form">
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="input"
            type="text"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className="input"
            type="password"
            name="confirmPass"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />

          <button className="form-button" type="submit" onClick={handleRegister}>
            Submit
          </button>
        </form>
      </div>

      <Loading
        isLoading={isLoading}
        isDone={isDone}
        includeDoneAnim={true}
        message={'Signing up...'}
        isModal
      />

    </div>
  );

  return (
    <div>
      {type === 'login' && getLoginJSX()}
      {type === 'register' && getRegisterJSX()}
    </div>
  );
};

export default LoginRegisterForm;
