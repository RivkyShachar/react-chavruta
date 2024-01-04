import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValueName } from '../../redux/featchers/searchSlice';
import { setSearchValueUser } from '../../redux/featchers/searchUserSlice';
import { useNavigate} from 'react-router-dom';
import { TOKEN_NAME } from '../../services/apiService';

const Header = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
 
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

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/user">
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
                            <a className="nav-link text-info" href="/user/createPost">
                                Create post
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="/user/requestsList/marked">
                                Marked 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-success" href="/user/userProfile">
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
                    {localStorage.getItem(TOKEN_NAME) && (
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
