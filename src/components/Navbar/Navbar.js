import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Navbar extends React.Component {

  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link> */}

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route path="/about">
            <About />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route> */}

        </Switch>

      </Router >
    );
  }

}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}


export default Navbar;
