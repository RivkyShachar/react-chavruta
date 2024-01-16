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
                            lineHeight: '1.5',
                            transition: 'transform 0.3s, text-shadow 0.3s',
                            cursor: 'pointer',
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.2)';
                            e.target.style.textShadow = '8px 3px 5px rgba(255, 255, 153, 0.7)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.textShadow = 'none';
                        }}
                    >
                        {translate('home.welcomeMessage', language)} <br /> {translate('home.studyPartnerMessage', language)}
                    </h1>
                </div>

                <div className='mt-4' data-aos='fade-up'>
                    <button className='btn  btn-outline-success' onClick={signUp}>
                        {translate('home.getStarted', language)}
                    </button>
                </div>
            </div>

            <div>
                <div id="about" className='row justify-content-center'>
                    <div id="about" className='row justify-content-center'>
                        <div className='box col-md-5 col-10 p-5 mx-1 mb-4' data-aos='fade-right'>
                            <br />
                            <h3 style={{ lineHeight: '1.2' }}>
                                <strong>{translate('home.connectingMinds', language)}</strong>
                                <br />
                                <br />
                                {translate('home.connectingMindsDescription', language)}
                            </h3>
                        </div>

                        <div className='box col-md-5 col-10 p-5 mx-1 my-4' data-aos='fade-left'>
                            <img
                                src="https://images.pexels.com/photos/762686/pexels-photo-762686.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Your Alt Text"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        <div className='box col-md-5 col-10 p-5 mx-1 mb-4' data-aos='fade-left'>
                            <br />
                            <h3 style={{ lineHeight: '1.2' }}><strong>{translate('home.connectingMinds', language)}</strong><br />
                                <br />
                                {translate('home.connectingMindsDescription', language)}
                            </h3>
                        </div>

                        <div className='box col-md-5 col-10 p-5 mx-1 my-4' data-aos='fade-right'>
                            <img
                                src="https://images.pexels.com/photos/45717/pexels-photo-45717.jpeg"
                                alt="Your Alt Text"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>


                        <div className='box col-md-5 col-10 p-5 mx-1 mb-4' data-aos='fade-right'>
                            <br></br>
                            <h3 style={{ lineHeight: '1.2' }}><strong>{translate('home.connectingMinds', language)}</strong><br></br>
                                <br></br>
                                {translate('home.connectingMindsDescription', language)}
                            </h3>
                        </div>

                        <div className='box col-md-5 col-10 p-5 mx-1 my-4' data-aos='fade-left'>
                            <img
                                src="https://images.pexels.com/photos/1090941/pexels-photo-1090941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Your Alt Text"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                </div>

                <ContactUs />
            </div>
            <Footer />
        </div>
    );
};

export default Index;
