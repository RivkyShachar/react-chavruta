import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/featchers/authSlice';
import { TOKEN_NAME } from '../../services/apiService';

export default function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem(TOKEN_NAME);

    // Dispatch the logout action to update the Redux store
    dispatch(logout());
  };
    return (
        <div className='container' >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Chavruta</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact us</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                    </ul>
                    <button  onClick={handleLogout}>log out</button>
                </div>
            </nav>

        </div>
    )
}



