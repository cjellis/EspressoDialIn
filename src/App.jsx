import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/homepage';
// We will be adding additional routes in the future for profile information.

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
