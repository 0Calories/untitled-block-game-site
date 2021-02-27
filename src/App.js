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
      <Navbar />

      <Router>
        <Switch>

          <Route exact path="/">
            <LoginForm />
          </Route>

          <Route exact path="/profile">
            <LoginForm />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}


export default App;
