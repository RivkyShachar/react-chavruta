import React, { useState } from 'react';
import { logout } from '../../redux/featchers/authSlice';
import { TOKEN_NAME } from '../../services/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValueName } from '../../redux/featchers/searchSlice';
import { logout, selectAuth } from '../../redux/featchers/authSlice';

export default function Header() {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(store => store.authSlice);

  const handleLogout = () => {
    // Dispatch the logout action to update the Redux state
    dispatch(logout());
    // You might want to add additional logic for handling the actual logout process (e.g., clearing tokens, redirecting, etc.)
};
  const searchV = useSelector((myStore) => myStore.searchSlice.searchValue);

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(setSearchValueName({ searchValue: value }));
    
  };
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Chavruta
                </a>
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
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Yaeli
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                FAQ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Contact us
                            </a>
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
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <a className="dropdown-item" href="/">
                                    Action
                                </a>
                                <a className="dropdown-item" href="/">
                                    Another action
                                </a>
                                <a className="dropdown-item" href="/">
                                    Something else here
                                </a>
                            </div>
                        </li>
                    </ul>
                    <button  onClick={handleLogout}>log out</button>

                    <form className="form-inline my-2 d-flex align-items-center">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={handleInputChange}
                        />
                    </form>
                    {isLoggedIn && (
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                )}
                </div>
            </nav>
        </div>
    );
}
