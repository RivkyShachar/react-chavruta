import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValueName } from '../../redux/featchers/searchSlice';
import { setSearchValueUser } from '../../redux/featchers/searchUserSlice';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { TOKEN_NAME } from '../../services/apiService';

// Assuming you have Font Awesome set up and imported

const HeaderAdmin = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);


    const handleInputChange = (e) => {
        const value = e.target.value;
        dispatch(setSearchValueName({ searchValue: value }));
    };

    const handleInputChangeUser = (e) => {
        const value = e.target.value;
        dispatch(setSearchValueUser({ searchValueUser: value }));
    };

    const handleLogout = () => {
        localStorage.clear();
        nav("/",{ replace: true })
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/admin">
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
                            <a className="nav-link text-info" href="/admin/createPost">
                                Create post
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-warning" href="/admin/requestsList/relevantRequestsList">
                                Want to study with me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="/admin/requestsList/marked">
                                Marked
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/admin/requestsList/myStudyRequests">
                                Profile request
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-success" href="/admin/userProfile/myStudyRequests">
                                My profile
                            </a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 d-flex align-items-center">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search for request "
                            aria-label="Search"
                            onChange={handleInputChange}
                        />
                    </form>
                    <form className="form-inline my-2 mx-2 d-flex align-items-center">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search for user"
                            aria-label="Search"
                            onChange={handleInputChangeUser}
                        />
                    </form>
                    <ul className="navbar-nav ml-auto align-items-center">
                        <li className="nav-item">
                            <button
                                className="btn btn-link nav-link"
                                onClick={toggleMenu}
                                aria-label="Settings"
                            >
                                <FontAwesomeIcon icon={faCog} />
                            </button>
                        </li>
                    </ul>
                    {localStorage.getItem(TOKEN_NAME) && (
                        <button className="btn btn-danger" onClick={handleLogout}>
                            Logout
                        </button>
                    )}
                </div>


            </nav>
            {isMenuOpen && (
                <div className="menu-container">
                    {/* Your menu content goes here */}
                    <ul>
                        <li>Menu Item 1</li>
                        <li>Menu Item 2</li>
                        {/* Add more menu items as needed */}
                    </ul>
                </div>
            )}
            <Outlet />
        </div>
    );
};

export default HeaderAdmin;
