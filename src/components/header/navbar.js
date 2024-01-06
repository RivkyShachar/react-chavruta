import React from 'react';
import HeaderAdmin from '../header/adminHeader';
import Home from './home';
import Layout from './headerHome'

const Navbar = () => {
  const userRole = localStorage.getItem("ROLE");

  return (
    <div>
      {userRole === 'user' && <Layout />}
      {userRole === 'admin' && <HeaderAdmin />}
      {(userRole !== 'user' && userRole !== 'admin') && <Home />}
    </div>
  );
};

export default Navbar;
