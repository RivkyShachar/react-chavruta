import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TOKEN_NAME } from '../../services/apiService';


const Home = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    nav("/", { replace: true })
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Chavruta
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signUp">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/editUser">
                Update user profile
              </Link>
            </li>

          </ul>
          {localStorage.getItem(TOKEN_NAME) && (
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
