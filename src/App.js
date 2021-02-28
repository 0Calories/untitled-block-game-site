import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';

import './styles/styles.scss';
import ProfilePage from './components/Profile/ProfilePage';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
