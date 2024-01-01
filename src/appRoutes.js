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
const EditUser = React.lazy(() => import("./components/user/editUser"));
const SingleUser = React.lazy(() => import('./components/user/singleUser'));
const UserHome = React.lazy(() => import('./components/user/userHome'));
const CreateStudyRequest = React.lazy(() => import('./components/user/createRequest'));
const Layout = React.lazy(() => import('./layout/layout'));

const AppRoutes = () => {
    const isLoggedIn = true; // Replace with your actual authentication check
    const userRole = 'admin'; // Replace with your actual role check

    return (
        <Suspense fallback={<div className='w-full flex justify-center h-screen items-center'>Loading...</div>}>
            <Router>
                <Routes>
                    <Route index element={<Home />} />

                    <Route path='/' element={<Layout />}>
                        <Route path='/signUp' element={<SignUp />} />
                        <Route path='/login' element={<Login />} />
                    </Route>

                    <Route path='/user/*' element={<Layout />}>
                        {isLoggedIn && userRole === 'user' ?
                            (<>
                                <Route index element={<UserHome />} />
                                <Route path='editUser' element={<EditUser />} />
                                <Route path='singleUser/:idSingle1' element={<SingleUser />} />
                                <Route path='createPost' element={<CreateStudyRequest/>} />

                            </>)
                            :
                            <></>

                        }
                    </Route>
                    <Route path='/admin/*' element={<Layout />}>
                        {isLoggedIn && userRole === 'admin' ?
                            (<>
                                <Route index element={<AdminHome />} />
                                <Route path='singleUserAdmin/:idSingle1' element={<SingleUserAdmin />} />
                                <Route path='usersListAdmin' element={<UsersListAdmin />} />
                                <Route path='profileListImage' element={<ProfileListImage />} />
                                <Route path='requestList' element={<RequestList />} />
                            </>)
                            :
                            <></>
                        }
                    </Route>
                </Routes>
            </Router>
        </Suspense>
    );
};

export default AppRoutes;