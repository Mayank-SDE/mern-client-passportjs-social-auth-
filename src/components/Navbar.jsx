/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
const Navbar = ({ user }) => {
  const logoutHandler = () => {
    window.open('http://localhost:8000/auth/logout', '_self');
  };
  return (
    <nav className="flex flex-col sm:flex-row container bg-slate-900 py-4 px-3 text-slate-100 justify-between gap-2 items-center font-bold font-serif text-xl">
      <Link to="/">Mayank AuthO Authentication with Social Login</Link>
      <div className="w-[33%] flex flex-col sm:flex-row justify-around items-center gap-2 text-xl">
        {user ? (
          <>
            <img
              className="bg-white rounded-full"
              src={user.photos[0].value}
              alt=""
            />
            <div>{user.displayName}</div>
            <button
              onClick={logoutHandler}
              className="bg-slate-100 text-slate-900 rounded-xl hover:scale-110 px-3 py-1"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-slate-100 text-slate-900 rounded-xl hover:scale-110 px-3 py-1"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
