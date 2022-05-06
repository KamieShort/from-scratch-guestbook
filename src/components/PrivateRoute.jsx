import { Redirect, Route, useLocation } from 'react-router-dom';
import { useUserHook } from '../context/userContext';

export default function PrivateRoute({ children, ...rest }) {
  const context = useUserHook();

  const location = useLocation();

  console.log(context);

  return (
    <Route {...rest}>
      {user.email ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
}
