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
    <div className="navbar-light ">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className='container py-1'>
          <Link className="navbar-brand" to="/">
            Chavruta
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
                    About
                  </span>
                </li>
                <li>
                  <span className="nav-link text-info" onClick={scrollToContactUs}>
                    Contact Us
                  </span>

                </li>
                <li className="nav-item">
                  <Link className="nav-link text-success" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-primary" to="/signUp">
                    Sign up
                  </Link>
                </li>


              </ul>
            </div>
            <div className='col-2'>
              <div >
                {localStorage.getItem(TOKEN_NAME) && (
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
