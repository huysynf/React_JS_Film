import Redirect, {Route} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function ProtectedRoute({children, ...rest}) {
  let auth = useAuth();
  return (
      <Route
          {...rest}
          render={({location}) =>
              auth.user ? (
                  children
              ) : (
                  <Redirect
                      to={{
                        pathname: '/login',
                        state: {from: location},
                      }}
                  />
              )
          }
      />
  );
}