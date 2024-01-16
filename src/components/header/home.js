import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/featchers/languageSlice';
import { TOKEN_NAME } from '../../services/apiService';
import translate from '../../utill/translator';


const Home = () => {
  const dispatch = useDispatch();
  const language = useSelector((myStore) => myStore.languageSlice.language);


  const toggleLanguage = () => {
    dispatch(setLanguage({ language: language === 'en' ? 'he' : 'en' }));
  };


  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    nav("/", { replace: true })
  };
  const scrollToAbout = () => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContactUs = () => {
    const contactUsElement = document.getElementById('contactUs');
    if (contactUsElement) {
      contactUsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar-light  ">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className='container'>
          <Link className="navbar-brand" to="/">
            {translate('navbar.brand', language)}
          </Link>
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
            <div className='col-10'>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <span className="nav-link text-warning" onClick={scrollToAbout}>
                    {translate('navbar.about', language)}
                  </span>
                </li>
                <li>
                  <span className="nav-link text-info" onClick={scrollToContactUs}>
                    {translate('navbar.contactUs', language)}
                  </span>

                </li>
                <li className="nav-item">
                  <Link className="nav-link text-success" to="/login">
                    {translate('navbar.login', language)}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-primary" to="/signUp">
                    {translate('navbar.signUp', language)}
                  </Link>
                </li>
                <li className="nav-item d-lg-none" >
                  <button className="   d-md-none btn-sm py-2 px-3 btn-secondary me-5 " onClick={toggleLanguage}>
                    {language === 'en' ? 'עברית' : 'English'}

                  </button>
                </li>


              </ul>
            </div>
          </div>
          <button className="d-none d-lg-flex btn-sm py-2 px-3 btn-outline-secondary border border-secondary me-5 " onClick={toggleLanguage}>
            {language === 'en' ? 'עברית' : 'English'}

          </button>

          {localStorage.getItem(TOKEN_NAME) && (
            <button className="btn btn btn-outline-danger me-5 " onClick={handleLogout}>
              <span>{translate('navbar.logout', language)} </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
              </svg>
            </button>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
