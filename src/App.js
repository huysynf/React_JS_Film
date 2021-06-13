import React, {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Pages/Client/Layout/Header';
import Loading from './components/Loading/Loading';

const Login = lazy(() =>
    import( './Pages/Admin/Auth/Login'),
);
const DashBoard = lazy(() =>
    import( './Pages/Admin/DashBoard/DashBoard'),
);
const Home = lazy(() =>
    import( './Pages/Client/Home/Home'),
);
const Users = lazy(() =>
    import('./Pages/Admin/Users/Users'),
);

function App() {
  return (
      <Suspense fallback={<Loading ></Loading>}>
        <Router>
          <Switch>
            <Route exact={true} path={'/login'}>
              <Login/>
            </Route>
            <Route exact path={'/dashboard'}>
              <DashBoard/>
            </Route>
            <Route exact path={'/'}>
              <Header />
              <Home/>
            </Route>
            <Route exact path={'/users'}>
              <Users/>
            </Route>
          </Switch>
        </Router>
      </Suspense>
  
  );
}

export default App;
