import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth';
import Home from './views/Home';
import EntryList from './views/EntryList';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>

        <PrivateRoute path="/entryList">
          <EntryList />
        </PrivateRoute>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
