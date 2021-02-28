import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">Login</Link>
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
}

export default Navbar;
