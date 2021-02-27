import React from 'react';

class LoginForm extends React.Component {

  render() {
    return (
      <div className="login">
        <h2 className="login-text">Log In</h2>
        <div className="login-box">
          <form className="login-form">
            <input className="input" type="text" name="loginId" placeholder="Username or Email" />
            <input className="input" type="password" name="password" placeholder="Password" />
            <input className="login-button" type="submit" value="Log In" />
          </form>
        </div>
      </div>
    );
  }

}

export default LoginForm;
