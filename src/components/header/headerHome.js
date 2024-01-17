import React from 'react';
import { BiChevronDoubleDown } from 'react-icons/bi'; // Assuming you have a library like react-icons for icons
import SefariaSearch from '../common/sefariaSarch';
import SefariaSelectedTopics from '../common/sefariaSelectedTopics';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValueName } from '../../redux/featchers/searchSlice';
import { setLanguage } from '../../redux/featchers/languageSlice';
import { setSearchValueName1 } from '../../redux/featchers/searchSlice1';
import { useNavigate, useLocation } from 'react-router-dom';
import { TOKEN_NAME } from '../../services/apiService';
import { Outlet } from 'react-router-dom';
import translate from '../../utill/translator';

const backgroundColor = {
  backgroundColor: '#FFF6F6', // Replace with your actual pink color code #F6F6F6
};

const Header = () => {
  const dispatch = useDispatch();
  const language = useSelector((myStore) => myStore.languageSlice.language);
  const nav = useNavigate();

  const toggleLanguage = () => {
    dispatch(setLanguage({ language: language === 'en' ? 'he' : 'en' }));
  };

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <div className='container'>
          <a className="navbar-brand " href="/user">
            <img
              src="https://res.cloudinary.com/dmxzrb6dq/image/upload/v1705404742/chavruta-high-resolution-logo-transparent_x5yqdg.png"
              alt="Chavruta Logo"
              style={{ height: '30px' }}
            />          </a>

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
                <a className="nav-link text-with-border  text-with-border " style={{ color: '#007ED2',fontSize:'17px' }} href="/user/createPost">
                  {translate('navbar.createPost', language)}
                </a>

              </li>
              <li className="nav-item">
                <a className="nav-link text-with-border " style={{ color: '#0098FD', fontSize:'17px' }} href='/user/zoom'>
                  {translate('navbar.zoomNow', language)}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-with-border  " style={{ color: '#5EBFFF',fontSize:'17px' }} href="/user/requestsList/marked">
                  {translate('navbar.marked', language)}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-with-border " style={{color:'#95d6ff',fontSize:'17px'}} href="/user/userProfile">
                  {translate('navbar.myProfile', language)}
                </a>
              </li>
              <li className="nav-item d-lg-none my-2">
                <button className="btn-sm btn-secondary mx-1" onClick={toggleLanguage}>
                  {language === 'en' ? 'עברית' : 'English'}
                </button>
              </li>
              <li className="nav-item d-lg-none my-2">
                {localStorage.getItem(TOKEN_NAME) && (
                  <button className=" btn-sm btn-outline-danger border  border-danger  mx-1   " onClick={handleLogout}>
                    <span>{translate('navbar.logout', language)} </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                      <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                    </svg>
                  </button>
                )}
              </li>

            </ul>
            {isUserPage && (
              <form className="form-inline my-2 mx-2 d-flex align-items-center">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder={translate('navbar.searchUser', language)}
                  aria-label="Search"
                  onChange={handleInputChange}
                />
              </form>
            )}
          </div>
          <div className='d-none d-lg-flex align-items-center'>
            <button className="btn-sm btn-outline-secondary border border-secondary mx-1 " onClick={toggleLanguage}>
              {language === 'en' ? 'עברית' : 'English'}
            </button>

            {localStorage.getItem(TOKEN_NAME) && (
              <button className=" btn-sm btn-outline-danger border  border-danger  mx-1   " onClick={handleLogout}>
                <span>{translate('navbar.logout', language)} </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                </svg>
              </button>
            )}
          </div>




        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
