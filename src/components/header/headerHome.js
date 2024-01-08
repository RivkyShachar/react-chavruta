import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValueName } from '../../redux/featchers/searchSlice';
import { setSearchValueName1 } from '../../redux/featchers/searchSlice1';
import { useNavigate, useLocation } from 'react-router-dom';
import { TOKEN_NAME } from '../../services/apiService';
import { Outlet } from 'react-router-dom';

const backgroundColor = {
  backgroundColor: '#FFF6F6', // Replace with your actual pink color code #F6F6F6
};

const Header = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(setSearchValueName({ searchValue: value }));
  };

  const handleInputChangeUser = (e) => {
    const value = e.target.value;
    dispatch(setSearchValueName1({ searchValue1: value }));
  };

  const handleLogout = () => {
    localStorage.clear();
    nav('/', { replace: true });
    window.location.reload();
  };
  const location = useLocation();

  const isUserPage = location.pathname === '/user';


  return (
    <div>

      <div className=" ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light   px-5">
          <div className='container'>
     

                <a className="navbar-brand " href="/user">
                  Chavruta
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
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
                      <a className="nav-link text-warning" href="/user/requestsList/marked">
                        Marked
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-success" href="/user/userProfile">
                        My profile
                      </a>
                    </li>
                  </ul>

                  {/* <form className="form-inline my-2 d-flex align-items-center">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search for request "
                aria-label="Search"
                onChange={handleInputChangeUser}
              />
            </form> */}
                  {isUserPage && (
                    <form className="form-inline my-2 mx-2 d-flex align-items-center">
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search for user"
                        aria-label="Search"
                        onChange={handleInputChange}
                      />
                    </form>
                  )}
                </div>

                  {localStorage.getItem(TOKEN_NAME) && (
                    <button className="btn btn-danger me-5" onClick={handleLogout}>
                      Logout
                    </button>
                  )}
          </div>
        </nav>
      </div>
      <Outlet />

    </div>

  );
};

export default Header;