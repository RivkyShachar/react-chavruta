import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TOKEN_NAME } from '../../services/apiService';
import { logout, selectAuth } from '../../redux/featchers/authSlice';

const Home = () => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(store => store.authSlice);
  const nav = useNavigate();

  const handleLogout = () => {
    // Dispatch the logout action to update the Redux state
    dispatch(logout());
    // You might want to add additional logic for handling the actual logout process (e.g., clearing tokens, redirecting, etc.)
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          {isLoggedIn && (
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                )}
        </div>
      </nav>
    </div>
  );
};

export default Home;
