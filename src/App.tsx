import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Container from './components/Container';
import AppBar from './components/AppBar';
const HomeView = lazy(
  () => import('./views/HomeView' /* webpackChunkName: "HomeView" */),
);
const LoginView = lazy(
  () => import('./views/LoginView' /* webpackChunkName: "LoginView" */),
);
const TableView = lazy(
  () => import('./views/TableView' /* webpackChunkName: "LoginView" */),
);
const App: React.FC = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<p> Loading...</p>}>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route
              path='/login'
              element={
                <PublicRoute redirectTo='/table' restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path='/table'
              element={
                <PrivateRoute redirectTo='/login'>
                  <TableView />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
