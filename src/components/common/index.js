import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TOKEN_NAME } from '../../services/apiService';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './footer';
import ContactUs from './contactUs';
import translate from '../../utill/translator';

const Index = () => {
    const nav = useNavigate();
    const language = useSelector((myStore) => myStore.languageSlice.language);
    const scrollToPost = () => {
        const postElement = document.getElementById('post');
        if (postElement) {
            postElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToConnect = () => {
        const connectElement = document.getElementById('connect');
        if (connectElement) {
            connectElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToZoom = () => {
        const zoomElement = document.getElementById('zoom');
        if (zoomElement) {
            zoomElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        AOS.init({
            duration: 1500, // Set the animation duration (in milliseconds)
            once: true, // Only run once
        });
    }, []);

    useEffect(() => {
        if (localStorage.getItem(TOKEN_NAME)) {
            const role = localStorage.getItem("ROLE");
            if (role === 'user') {
                nav('/user');
            } else if (role === 'admin') {
                nav('/admin');
            }
        }
    }, [nav])


    const signUp = () => {
        nav('/signUp');
    };

    return (
        <div>
            <div className='container d-flex flex-column align-items-center justify-content-center' style={{ height: '70vh' }}>
                <div className='col-7 mb-4 text-center' data-aos='fade-up'>
                    <h1
                        className='display-5'
                        style={{
                            color: '#007ed2da',
                            lineHeight: '1.5',
                            transition: 'transform 0.3s, text-shadow 0.3s',
                            cursor: 'pointer',
                            textShadow: '1.5px 1.5px 1.5px #0061a2', // Adjust the values as needed
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.2)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                        }}
                    >
                        {translate('home.welcomeMessage', language)} <br /> {translate('home.studyPartnerMessage', language)}
                    </h1>
                </div>

                <div className='mt-4' data-aos='fade-up'>
                    <button className='btn  btn-outline-primary' onClick={signUp}>
                        {translate('home.getStarted', language)}
                    </button>
                </div>
            </div>
            <div className='mb-5'>
                <div className='container'>
                    <div className='d-flex text-center justify-content-center row col-12 mx-auto'>
                        <button className='btn  col-9 col-lg-3 col-md-3 border-lightblue-plus  backround-lightblue m-3  p-4' data-aos='zoom-in' onClick={scrollToPost}>
                            <h3 className='mb-3 diaplay-5 blue'>
                            {translate('home.postStudyRequest', language)}</h3>
                            <img src="https://res.cloudinary.com/dmxzrb6dq/image/upload/v1705512798/211601_upload_icon_wvexkn.png" style={{ maxHeight: '80px' }} />
                        </button>
                        <button className='col-9 col-lg-3 col-md-3 border-lightblue-plus  backround-lightblue m-3 my-3 p-4 ' data-aos='zoom-in' onClick={scrollToConnect}>
                            <h3 className='mb-3 diaplay-5 blue'>
                            {translate('home.browseAndConnect', language)}
                            </h3>
                            <img src="https://res.cloudinary.com/dmxzrb6dq/image/upload/v1705512647/4280504_account_group_outlined_family_people_icon_1_zd6alc.png" style={{ maxHeight: '80px' }} />

                        </button>
                        <button className='col-9 col-lg-3 col-md-3 border-lightblue-plus  backround-lightblue m-3 my-3 p-4' data-aos='zoom-in' onClick={scrollToZoom}>
                            <h3 className='mb-3 diaplay-5 blue'>
                            {translate('home.startZoomSession', language)}
                            </h3>
                            <img src="https://res.cloudinary.com/dmxzrb6dq/image/upload/v1705511890/8197855_zoom_social_network_communication_network_conversation_icon_cmr7ad.png" style={{ maxHeight: '80px' }} />
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className='mb-5 backround-lightblue'>
                <div className='container'>
                    <div className='d-flex text-center justify-content-center row col-12 mx-auto'>
                       
                        <div className='btn  col-9 col-lg-3 col-md-3 border-lightblue-plus   m-3  p-4' >
                       
                            <h3 className='mb-3 diaplay-5 blue'>
                                Login / sign up</h3>
                            <img src="https://res.cloudinary.com/dmxzrb6dq/image/upload/v1705515645/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-01-17_%D7%91%D7%A9%D7%A2%D7%94_20.18.11_cf6f7c64_eytgmy.jpg"  className='p-1' style={{ maxHeight: '120px' }} />
                            <img src="https://res.cloudinary.com/dmxzrb6dq/image/upload/v1705515646/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-01-17_%D7%91%D7%A9%D7%A2%D7%94_20.18.06_09856288_ekxmry.jpg" className='p-1' style={{ maxHeight: '120px' }} />
                        </div>
                        <div className='col-9 col-lg-3 col-md-3 border-lightblue-plus   m-3 my-3 p-4 ' >
                            <h3 className='mb-3 diaplay-5 blue'>
                                Create post
                            </h3>                            
                            <img src="https://res.cloudinary.com/dmxzrb6dq/image/upload/v1705514564/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-01-17_%D7%91%D7%A9%D7%A2%D7%94_20.02.05_c1b7c830_wrzyob.jpg" style={{ maxHeight: '200px' }} />

                        </div>
                        <div className='col-9 col-lg-3 col-md-3 border-lightblue-plus   m-3 my-3 p-4' >
                            <h3 className='mb-3 diaplay-5 blue'>
                                See others post
                            </h3>
                            <img src="https://res.cloudinary.com/dmxzrb6dq/image/upload/v1705514565/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-01-17_%D7%91%D7%A9%D7%A2%D7%94_20.02.08_48451142_ypnbqq.jpg" style={{ maxHeight: '120px' }} />
                        </div>
                    </div>
                </div>
            </div> */}


            <div>
                <div id="about" className='row justify-content-center'>


                    <div div id="post" className='box col-md-5 col-10 p-5 mx-1 mb-4 blue ' data-aos='fade-down-right'>
                        <br />
                        <h2 ><strong>{translate('home.postStudyRequest', language)}</strong></h2>
                        <h3 style={{ lineHeight: '1.8' }}>
                            <br />
                            {translate('home.postStudyRequestDescription', language)}
                        </h3>
                    </div>

                    <div className='box col-md-5 col-10 p-5 mx-1 my-4 ' data-aos='fade-down-left'>
                        <img
                            src="https://res.cloudinary.com/dmxzrb6dq/image/upload/v1705514564/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-01-17_%D7%91%D7%A9%D7%A2%D7%94_20.02.05_c1b7c830_wrzyob.jpg"
                            alt="Your Alt Text"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>


                    <div id="connect" className='box col-md-5 col-10 p-5 mx-1 mb-4 blue' data-aos='fade-down-left'>
                        <br />
                        <h2><strong>{translate('home.browseAndConnect', language)}</strong></h2>
                        <h3 style={{ lineHeight: '1.8' }}>
                            <br />
                            {translate('home.browseAndConnectDescription', language)}
                        </h3>
                    </div>

                    <div className='box col-md-5 col-10 p-5 mx-1 my-4' data-aos='fade-down-right'>
                        <img
                            src="https://res.cloudinary.com/dmxzrb6dq/image/upload/v1705514565/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-01-17_%D7%91%D7%A9%D7%A2%D7%94_20.02.08_48451142_ypnbqq.jpg"
                            alt="Your Alt Text"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>


                    <div id="zoom" className='box col-md-5 col-10 p-5 mx-1 mb-4 blue' data-aos='fade-down-right'>
                        <br></br>
                        <h2><strong>{translate('home.startZoomSession', language)}</strong></h2>
                        <h3 style={{ lineHeight: '1.8' }}>
                            <br></br>
                            {translate('home.startZoomSessionDescription', language)}
                        </h3>
                    </div>

                    <div className='box col-md-5 col-10 p-5 mx-1 my-4' data-aos='fade-down-left'>
                        <img
                            src="https://res.cloudinary.com/dmxzrb6dq/image/upload/v1705514722/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-01-17_%D7%91%D7%A9%D7%A2%D7%94_20.04.48_a964f040_xrqvhm.jpg"
                            alt="Your Alt Text"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>


                <ContactUs />
            </div>
            <Footer />
        </div>
    );
};

export default Index;
