import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div className="container d-flex  justify-content-center vh-100 mt-5 ">
      <div className="d-flex flex-column ">
        <Link to="/admin/usersListAdmin" className="btn btn-primary mb-2 col-12 my-3">
          Users List Admin
        </Link>
        <Link to="/admin/requestList" className="btn btn-primary mb-2 col-12  my-3 ">
          Request List
        </Link>
        <Link to="/admin/profileListImage" className="btn btn-primary mb-2 col-12 my-3" >
          Profile List Image
        </Link>
      </div>
    </div>
  );
};

export default AdminHome;

