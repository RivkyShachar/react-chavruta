import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('./components/auth/home'));
const Login = React.lazy(() => import('./components/auth/login'));
const SignUp = React.lazy(() => import('./components/auth/register/appRegister'));
const AdminHome = React.lazy(() => import('./components/admin/adminHome'));
const SingleUserAdmin = React.lazy(() => import('./components/admin/singleUserAdmin'));
const UsersListAdmin = React.lazy(() => import('./components/admin/usersListAdmin'));
const RequestList = React.lazy(() => import('./components/admin/requestList'));
const ProfileListImage = React.lazy(() => import('./components/admin/profileListImage'));
const EditUser = React.lazy(()=>import("./components/user/editUser"));
const UserHome = React.lazy(() => import('./components/user/userHome'));
const CreateStudyRequest = React.lazy(() => import('./components/user/createRequest'));
const Layout = React.lazy(() => import('./layout/layout'));

const AppRoutes = () => {
  const isLoggedIn = true; // Replace with your actual authentication check
  const userRole = 'user'; // Replace with your actual role check

  return (
    <Suspense fallback={<div className='w-full flex justify-center h-screen items-center'>Loading...</div>}>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signUp' element={<SignUp />} />
              </Layout>
            }
          />
          <Route
            path='/user/*'
            element={
              isLoggedIn && userRole === 'user' ? (
                <Layout>
                  <Route index element={<UserHome />} />
                  <Route path='editUser' element={<EditUser />} />
                </Layout>
              ) : (
                <Navigate to='/' replace />
              )
            }
          />
          <Route
            path='/admin/*'
            element={
              isLoggedIn && userRole === 'admin' ? (
                <Layout>
                  <Route index element={<AdminHome />} />
                  <Route path='singleUserAdmin/:idSingle1' element={<SingleUserAdmin />} />
                  <Route path='usersListAdmin' element={<UsersListAdmin />} />
                  <Route path='profileListImage' element={<ProfileListImage />} />
                  <Route path='requestList' element={<RequestList />} />
                </Layout>
              ) : (
                <Navigate to='/' replace />
              )
            }
          />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRoutes;
