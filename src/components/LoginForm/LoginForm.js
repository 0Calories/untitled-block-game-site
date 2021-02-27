import React from 'react';

import './styles.scss';

class LoginForm extends React.Component {

  render() {
    return (
      <div>
        <h2 className="login-text">Login</h2>
        <div className="login-box">
          <form>
            <input type="text" name="loginId" />
            <input type="password" name="password" />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }

}

export default LoginForm;
