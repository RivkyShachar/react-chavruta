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
                  <Link to="/form">Form</Link>
                </li>
                <li>
                  <Link to="/resumeForm">Resume form</Link>
                </li>
                <li>
                  <Link to="/resumeList">Resume list</Link>
                </li>
                <li>
                  <Link to="/loginSignup">login signup</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
        // <div className="isolate bg-white">
        //     <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">

        //     </div>
        //     <div className="px-6 pt-6 lg:px-8">
        //         <div>
        //             <p>nav bar header in auth</p>
        //         </div>
        //     </div>
        //     <main>
        //         <div className="relative px-6 lg:px-8">
        //             <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        //                 <div>

        //                     <div>
        //                         <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl"> Welcome to the future of restaurants
        //                         </h1>
        //                         <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
        //                             Try for yourself and discover how simple it is
        //                         </p>
        //                         <div className="mt-8 flex gap-x-4 sm:justify-center">
        //                             <Link
        //                                 to={'/signUp'}
        //                                 className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
        //                             >
        //                                 Get started
        //                                 <span className="text-indigo-200" aria-hidden="true">
        //                                     &rarr;
        //                                 </span>
        //                             </Link>
        //                         </div>
        //                     </div>
        //                     <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        //                         <svg
        //                             className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
        //                             viewBox="0 0 1155 678"
        //                             fill="none"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                         >
        //                             <path
        //                                 fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
        //                                 fillOpacity=".3"
        //                                 d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        //                             />
        //                             <defs>
        //                                 <linearGradient
        //                                     id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
        //                                     x1="1155.49"
        //                                     x2="-78.208"
        //                                     y1=".177"
        //                                     y2="474.645"
        //                                     gradientUnits="userSpaceOnUse"
        //                                 >
        //                                     <stop stopColor="#9089FC" />
        //                                     <stop offset={1} stopColor="#FF80B5" />
        //                                 </linearGradient>
        //                             </defs>
        //                         </svg>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </main>
        // </div>
    )
}

export default Home