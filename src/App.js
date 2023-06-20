import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from "./constants/routes";
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const NotFound = lazy(() => import('./pages/not_found'));
const Dashboard = lazy(() => import('./pages/dashboard'));

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{user}}>
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={< Login />} />
          <Route path={ROUTES.SIGN_UP} element={< SignUp />} />
          <Route path={ROUTES.NOT_FOUND} element={< NotFound />} />
          <Route path={ROUTES.DASHBOARD} element={< Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
    </UserContext.Provider>
  );
}


export default App;
