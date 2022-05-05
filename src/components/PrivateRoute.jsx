import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  const user = { email: '' };

  return (
    <Route {...rest}>{user.email ? children : <Redirect to="/auth" />}</Route>
  );
}
