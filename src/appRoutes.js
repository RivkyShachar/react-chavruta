import React, { useEffect, Suspense } from 'react'
import Layout from './layout/layout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
// import { TOKEN_NAME, RESTAURNAT_ID } from './services/servise'
// import { getUserInfo } from './redux/featchers/userSlice'
// import { getRestaurantInfo } from './redux/featchers/restaurantSlice'
import Loader from './components/ui/loader/loader'


// const RequestResetPass = React.lazy(() => import('./components/auth/requestResetPass'));
// const ResetPassword = React.lazy(() => import('./components/auth/resetPassword'));
const Home = React.lazy(() => import('./components/auth/home'));
const HeaderLogin = React.lazy(() => import('./components/user/userHome'));
const Login = React.lazy(() => import('./components/auth/login'));
const SignUp = React.lazy(() => import('./components/auth/register/appRegister'));
const AdminHome = React.lazy(() => import('./components/admin/adminHome'));
const SingleUserAdmin = React.lazy(() => import('./components/admin/singleUserAdmin'));
const UsersListAdmin = React.lazy(() => import('./components/admin/usersListAdmin'));
const RequestList = React.lazy(() => import('./components/admin/requestList'));
const ProfileListImage = React.lazy(() => import('./components/admin/profileListImage'));
const EditUser = React.lazy(()=>import("./components/user/editUser"));
const UserHome = React.lazy(() => import('./components/user/userHome'));


// const MyRestaurantsList = React.lazy(() => import('./components/auth/myRestaurantsList'));
// const NewRestaurant = React.lazy(() => import('./components/auth/newRestaurant'));
// const NotFound = React.lazy(() => import('./components/notFound'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div className='w-full flex justify-center h-screen items-center'>Loading...</div>}>
            <Router>
                <Routes>
                <Route index element={<Home />} />
                <Route path='/'>

                            <Route path='/login' element={<Login />} />
                            <Route path='/signUp' element={<SignUp />} />
                            <Route path='/adminHome' element={<AdminHome/>} />
                            <Route path='/singleUserAdmin/:idSingle1' element={<SingleUserAdmin/>} />
                            <Route path='/editUser' element={<EditUser/>} />
                            <Route path='/usersListAdmin' element={<UsersListAdmin/>} />
                            <Route path='/profileListImage' element={<ProfileListImage/>} />
                            <Route path='/requestList' element={<RequestList/>} />
                            <Route path='/user' element={<UserHome/>} />
                       
                        </Route>
                </Routes>
            </Router>
        </Suspense>
    );
};
export default AppRoutes;