import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth';
import Home from './views/Home';
import Guestbook from './views/Guestbook';

export default function App() {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/guestbook">
        <Guestbook />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
