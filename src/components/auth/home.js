// import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Nav from '../../layout/header/nav'
import { TOKEN_NAME } from '../../services/apiService'
const Home = () => {

    const nav = useNavigate()

    return (
        <header className='container-fluid bg-dark text-white'>
        <div className="container">
          <div className="row align-items-center">
            <div className='col-auto'>
              <h2 className='text-info'>Resumaker</h2>
            </div>
            <nav className="nav col-auto">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signUp">Sign up </Link>
                </li>
               
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
}

export default Home