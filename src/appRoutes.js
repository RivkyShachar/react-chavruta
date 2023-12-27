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
const Login = React.lazy(() => import('./components/auth/login'));
const SignUp = React.lazy(() => import('./components/auth/register/appRegister'));
// const MyRestaurantsList = React.lazy(() => import('./components/auth/myRestaurantsList'));
// const NewRestaurant = React.lazy(() => import('./components/auth/newRestaurant'));
// const NotFound = React.lazy(() => import('./components/notFound'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div className='w-full flex justify-center h-screen items-center'>Loading...</div>}>
            <Router>
                <Routes>
                <Route index element={<Home />} />
                <Route path='/' element={<Layout />}>
                            {/* Outlet */}
                            {/* <Route path='/requestResetPass' element={<RequestResetPass />} />
                            <Route path='/resetPassword/:userId/:uniqueString' element={<ResetPassword />} /> */}
                            <Route path='/login' element={<Login />} />
                            <Route path='/signUp' element={<SignUp />} />
                            {/* <Route path='/fillDetales/:userId' element={<WorkerFill />} />
                            <Route path='/myrestaurantlist' element={< MyRestaurantsList />} />
                            <Route path='/newrestaurant' element={< NewRestaurant />} /> */}
                        </Route>
                </Routes>
            </Router>
        </Suspense>
    );
};
export default AppRoutes;