import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';

const Navbar = lazy(() => import('./components/Navbar'));
const Post = lazy(() => import('./pages/Post'));
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:8000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error('Authentication is failed');
        })
        .then((responseObject) => {
          setUser(responseObject.user);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }, []);

  return (
    <>
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/posts/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
