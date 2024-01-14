import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TOKEN_NAME } from './services/apiService';
import { handleUserInfo } from './utill/authService';
import { useSelector } from 'react-redux';

const Login = React.lazy(() => import('./components/auth/login'));
const SignUp = React.lazy(() => import('./components/auth/register/appRegister'));
const AdminHome = React.lazy(() => import('./components/admin/adminHome/index'));
const UsersListAdmin = React.lazy(() => import('./components/admin/usersListAdmin'));
const RequestListAdmin = React.lazy(() => import('./components/admin/requestList'));
const ProfileListImage = React.lazy(() => import('./components/admin/profileListImage'));
const SingleUser = React.lazy(() => import('./components/user/singleUser'));
const UserHome = React.lazy(() => import('./components/user/userHome/index'));
const CreateStudyRequest = React.lazy(() => import('./components/user/createRequest'));
const UsersList = React.lazy(() => import('./components/user/usersList'));
const RequestList = React.lazy(() => import('./components/user/requestList'));
const UserProfileMy = React.lazy(() => import('./components/user/userProfile'));
const Error = React.lazy(() => import("./components/common/error"));
const UserProfileAdmin = React.lazy(() => import("./pages/admin/userProfile"));
const UserProfile = React.lazy(() => import("./pages/user/userProfile"));
const Sefaria = React.lazy(() => import("./components/common/sefaria"));
const Navbar = React.lazy(() => import("./components/header/navbar"));
const Index = React.lazy(() => import("./components/common/index"));
const ZoomMeetingButton = React.lazy(() => import("./components/user/zoomNow"));

const AppRoutes = () => {
    const language = useSelector((myStore) => myStore.languageSlice.language);
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem(TOKEN_NAME)) {
            handleUserInfo(dispatch);
        }
    }, [dispatch]);

    // Load RTL CSS dynamically
    useEffect(() => {
        if (language === 'he') {
            const rtlCssLink = document.createElement('link');
            rtlCssLink.href = '/path/to/rtl.css';
            rtlCssLink.rel = 'stylesheet';
            document.head.appendChild(rtlCssLink);

            // Clean up when the component unmounts or language changes
            return () => {
                document.head.removeChild(rtlCssLink);
            };
        }
    }, [language]);

    // Update your HTML tag dynamically
    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    }, [language]);

    return (
        <Suspense fallback={
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}>
            <Router>
                <Routes>
                    <Route element={<Navbar />}>
                        <Route path='/'>
                            <Route index element={<Index />} />
                            <Route path='signUp' element={<SignUp />} />
                            <Route path='login' element={<Login />} />
                            <Route path='sefaria' element={<Sefaria />} />
                        </Route>

                        <Route path='/user'>
                            {localStorage.getItem(TOKEN_NAME) && localStorage.getItem("ROLE") === 'user' ?
                                (<>
                                    <Route index element={<UserHome />} />
                                    <Route path='singleUser/:parameter' element={<UserProfile />} />
                                    <Route path='createPost' element={<CreateStudyRequest />} />
                                    <Route path='usersList' element={<UsersList />} />
                                    <Route path='requestsList/:parameter' element={<RequestList />} />
                                    <Route path='userProfile' element={<UserProfileMy />} />
                                    <Route path='marked' element={<RequestList />} />
                                    <Route path='editProfile' element={<SignUp />} />
                                    <Route path='zoom' element={<ZoomMeetingButton />} />
                                </>)
                                :
                                <> <Route index element={<Index />} /></>

                            }
                        </Route>
                        <Route path='/admin/*'>
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
                                <><Route index element={<Index />} /></>
                            }
                        </Route>
                        <Route path='*' element={<Error />} />
                    </Route>
                </Routes>
            </Router>
        </Suspense >
    );
};

export default AppRoutes;