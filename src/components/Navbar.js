import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class Navbar extends React.Component {

  render() {
    return (
      <Router className="navbar">
        <div className="navbar">
          <Link to="/">Login</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </Router >
    );
  }

}

function Home() {
  return (
    <div>
    </div>
  );
}


export default Navbar;
