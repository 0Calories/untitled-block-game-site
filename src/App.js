import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';

import './styles/styles.scss';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/profile" component={Profile} />
        </Switch>

      </Router>

    </div>
  );
}

function Profile() {
  return (
    <div>
      test
    </div>
  );
}

export default App;
