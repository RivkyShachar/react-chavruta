import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TOKEN_NAME } from './services/apiService';
import { handleUserInfo } from './utill/authService';

const Home = React.lazy(() => import('./components/auth/home'));
const Login = React.lazy(() => import('./components/auth/login'));
const SignUp = React.lazy(() => import('./components/auth/register/appRegister'));
const AdminHome = React.lazy(() => import('./components/admin/adminHome'));
const UsersListAdmin = React.lazy(() => import('./components/admin/usersListAdmin'));
const RequestListAdmin = React.lazy(() => import('./components/admin/requestList'));
const ProfileListImage = React.lazy(() => import('./components/admin/profileListImage'));
const SingleUser = React.lazy(() => import('./components/user/singleUser'));
const UserHome = React.lazy(() => import('./components/user/userHome'));
const CreateStudyRequest = React.lazy(() => import('./components/user/createRequest'));
const UsersList = React.lazy(() => import('./components/user/usersList'));
const RequestList = React.lazy(() => import('./components/user/requestList'));
const Layout = React.lazy(() => import('./layout/layout'));
const HeaderAdmin = React.lazy(() => import('./components/header/adminHeader'));
const UserProfileMy = React.lazy(() => import('./components/user/userProfile'));
const Error = React.lazy(() => import("./components/common/error"));
const UserProfileAdmin = React.lazy(() => import("./pages/admin/userProfile"));
const UserProfile = React.lazy(() => import("./pages/user/userProfile"));

const AppRoutes = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (localStorage.getItem(TOKEN_NAME)) {
    //       handleUserInfo(dispatch);
    //     }
    //   }, []);

    return (
        <Suspense fallback={<div className='w-full flex justify-center h-screen items-center'>Loading...</div>}>
            <Router>
                <Routes>
                    <Route index element={<Home />} />

                    <Route path='/' element={<Home />}>
                        <Route path='/signUp' element={<SignUp />} />
                        <Route path='/login' element={<Login />} />
                    </Route>

                    <Route path='/user' element={<Layout />}>
                        {localStorage.getItem(TOKEN_NAME) && localStorage.getItem("ROLE") === 'user' ?
                            (<>
                                <Route index element={<UserHome />} />
                               
                        <Route path='singleUser/:parameter' element={<UserProfile />} />
                        <Route path='createPost' element={<CreateStudyRequest />} />
                        <Route path='usersList' element={<UsersList />} />
                        <Route path='requestsList/:parameter' element={<RequestList />} />
                        <Route path='userProfile/:parameter' element={<UserProfileMy />} />
                        <Route path='marked' element={<RequestList />} />
                        <Route path='editProfile' element={<SignUp />} />
                    </>)
                    :
                    <></>

                        }
                    </Route>
                    <Route path='/admin/*' element={<HeaderAdmin />}>
                        {localStorage.getItem(TOKEN_NAME) && localStorage.getItem("ROLE") === 'admin' ?
                            (<>
                                <Route index element={<AdminHome />} />
                                <Route path='singleUserAdmin/:idSingleRequest' element={<UserProfileAdmin />} />
                                <Route path='singleUser/:idSingle1' element={<SingleUser />} />
                                <Route path='usersListAdmin' element={<UsersListAdmin />} />
                                <Route path='profileListImage' element={<ProfileListImage />} />
                                <Route path='requestList' element={<RequestListAdmin />} />
                                <Route path='createPost' element={<CreateStudyRequest />} />
                                <Route path='usersList' element={<UsersList />} />
                                <Route path='requestsList/:parameter' element={<RequestList />} />                                
                                <Route path='userProfile/:parameter' element={<UserProfile />} />                                
                                <Route path='marked' element={<RequestList />} />

                        </>)
                        :
                        <></>
                    }
                </Route>
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
        </Suspense >
    );
};

export default AppRoutes;