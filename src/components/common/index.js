import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './footer';
import ContactUs from './contactUs';

const Index = () => {
    const nav = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1500, // Set the animation duration (in milliseconds)
            once: true, // Only run once
        });
    }, []);

    const signUp = () => {
        nav('/signUp');
    };

    return (
        <div>
            <div className='container d-flex flex-column align-items-center justify-content-center' style={{ height: '70vh' }}>
                <div className='col-7 mb-4 text-center' data-aos='fade-up'>
                    <h1
                        className='Display-1'
                        style={{
                            lineHeight: '1.5',
                            transition: 'transform 0.3s, text-shadow 0.3s',
                            cursor: 'pointer',
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.1)';
                            e.target.style.textShadow = '3px 3px 5px rgba(0, 128, 0, 0.7)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.textShadow = 'none';
                        }}
                    >
                        WELCOME TO CHAVRUTA <br /> A PLACE WHERE YOU CAN FIND A STUDY PARTNER
                    </h1>
                </div>

                <div className='mt-4' data-aos='fade-up'>
                    <button className='btn  btn-outline-success' onClick={signUp}>
                        Get Started
                    </button>
                </div>
            </div>

            <div>
                <div id="about" className='row justify-content-center'>
                    <div className='box col-5 p-5 mx-1 mb-4' data-aos='fade-right' >
                        <br />
                        <h3 style={{ lineHeight: '1.2' }}>
                            <strong>Chavruta: Connecting Minds, Igniting Knowledge.</strong>
                            <br />
                            <br />
                            Join Chavruta and connect with like-minded individuals on a journey of shared learning and intellectual growth.
                        </h3>
                    </div>

                    <div className='box col-5 p-5 mx-1 my-4' data-aos='fade-left'>
                        <img
                            src="https://images.pexels.com/photos/762686/pexels-photo-762686.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Your Alt Text"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div className='row justify-content-center  '>
                        <div className='box   col-5 p-5  mx-1 my-4' data-aos='fade-right'>
                            <img
                                src="https://images.pexels.com/photos/45717/pexels-photo-45717.jpeg"
                                alt="Your Alt Text"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className='box col-5 p-5 mx-1 mb-4' data-aos='fade-left'>
                            <br></br>
                            <h3 style={{ lineHeight: '1.2' }}><strong>Discover the Joy of Learning Together with Chavruta</strong><br></br>
                                <br></br>
                                Dive into the joyous world of collaborative learning with Chavruta, where every study session is an opportunity to explore, question, and grow.</h3>
                        </div>
                    </div>
                    <div className='row justify-content-center ' >
                        <div className='box col-5 p-5 mx-1 mb-4' data-aos='fade-right'>
                            <br></br>
                            <h3 style={{ lineHeight: '1.2' }}><strong>Empowering Your Learning Journey: Chavruta, Your Study Partner Hub.</strong><br></br>                       <br></br>

                                Chavruta is not just a platform; it's your dedicated study partner hub, empowering you to excel in your educational pursuits.</h3>
                        </div>
                        <div className='box   col-5 p-5  mx-1 my-4' data-aos='fade-left'>
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
