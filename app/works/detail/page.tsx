'use client';
// import type { AppProps } from 'next/app';
// import Link from 'next/link';
import '../../generalplana.css'; // Import global styles
import '../../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from '../../../components/Footer';
// import Social from '../../../components/Social';
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';


export default function About() {
    return (    
        <>
        {/* <Navbar /> */}
        {/* <Social/> */}
        <main>
            <div className="section headpage px-4 px-xl-0">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='text-uppercase display-5 fw-bold'>Every project is crafted to captivate and inspire.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section px-4 px-xl-0'>
                <div className='container-xl'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <ul className='plana-work'>
                                <li className="text-uppercase fw-bold">
                                    <h2>Regarde les hommes tomber</h2>
                                </li>
                            </ul>
                            <div className='video-container mb-4'>
                                <iframe className='responsive-iframe' src="https://www.youtube.com/embed/S0ZF9JJqxF8?si=IOVeDzW9c5Y55QmP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>    
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className='row'>
                                <div className='col-12 col-lg-4'>
                                    <p className='mb-0'>Director</p>
                                    <p className='fw-bold text-uppercase'>Stanley Kubrick</p>
                                </div>
                                <div className='col-12 col-lg-3'>
                                    <p className='mb-0'>Production Year</p>
                                    <p className='fw-bold text-uppercase'>2022</p>
                                </div>
                                <div className='col-12 col-lg-5'>
                                    <p className='mb-0'>Client</p>
                                    <p className='fw-bold text-uppercase'>Regarde les Hommes Tomber</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section pt-1 px-4 px-xl-0'>
                <div className='container-xl'>
                    <div className="row d-flex">
                   
                    <div className="col-12 col-lg-4">
                        <h3 className="display-6 fw-bold mb-4">OTHER WORKS</h3>
                    </div>
                    <div className="col-12">
                    <div className="row row-cols-1 row-cols-lg-3">
                        <div className="col mb-4">
                        <div className="card card-project h-100 bg-transparent border-0">
                            <Image src="https://dropbox.com/scl/fi/epg8d52lnl9hgpbghen7t/Mask-group-2.jpg?rlkey=wgapmhh3fo4wftum9s8dyk21g&st=uym5rlvu&raw=1" width={16} height={9}layout="responsive" className="card-img-top mb-1 rounded-2" alt=""></Image>
                            <div className="card-body p-0">
                            <div className="row g-0">
                                <div className="col-1 pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clapperboard-icon lucide-clapperboard pb-1 project-icon"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg></div>
                                <div className="col-11">
                                <p className="card-title text-uppercase fw-bold">Card title </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col mb-4">
                        <div className="card card-project h-100 bg-transparent border-0">
                            <Image src="https://dropbox.com/scl/fi/epg8d52lnl9hgpbghen7t/Mask-group-2.jpg?rlkey=wgapmhh3fo4wftum9s8dyk21g&st=uym5rlvu&raw=1" width={16} height={9}layout="responsive" className="card-img-top mb-1 rounded-2" alt=""></Image>
                            <div className="card-body p-0">
                            <div className="row g-0">
                                <div className="col-1 pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clapperboard-icon lucide-clapperboard pb-1 project-icon"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg></div>
                                <div className="col-11">
                                <p className="card-title text-uppercase fw-bold">Card title </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col mb-4">
                        <div className="card card-project h-100 bg-transparent border-0">
                            <Image src="https://dropbox.com/scl/fi/dmk4na0no7trmivoklxwg/Mask-group.jpg?rlkey=2aarkte7jwifynm4guo1jt48d&st=3911uk9m&raw=1" width={16} height={9}layout="responsive" className="card-img-top mb-1 rounded-2" alt=""></Image>
                            <div className="card-body p-0">
                            <div className="row g-0">
                                <div className="col-1 pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-camera-icon lucide-camera project-icon"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                                </div>
                                <div className="col-11">
                                <p className="card-title text-uppercase fw-bold">Card title </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="section py-5">
              <div className="py-5">

              </div>
            </div>
        </main>
        {/* <Footer/> */}
        </>
        
    );
  }
  