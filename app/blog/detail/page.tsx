'use client';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import '../../generalplana.css'; // Import global styles
import '../../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Social from '../../../components/Social';


export default function About() {
    return (    
        <>
        <Navbar />
        <Social/>
        <main>
            {/* <div className="section headpage px-4 px-xl-0">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='text-uppercase display-5 fw-bold'>Insights, inspirations, industry trends—<br></br>and everything in between.</h2>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="section px-4 px-xl-0">
                <div className='container-xl'>
                    <div className='row justify-content-center'>
                        <div className="col-12 col-lg-10">
                            <h2 className='text-uppercase fw-bold mb-4'>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                            <img src="https://www.dropbox.com/scl/fi/54piuxkyqd4ksu0yabkun/filip-eliasson-qaF4IhTuZv0-unsplash.webp?rlkey=hwp8wirl76frdf8n7qdwxhm40&st=gdhe4nae&raw=1" className="img-fluid mb-1" alt="..."/>
                            <p className='fs-5 fw-normal mb-2 mt-3'>By PLANA Vision | Published in 22 May 2025</p>
                            <hr className='border-white py-3'/>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                <ul>
                                    <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                                    <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                                    <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                                    <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
                                </ul>
							</p>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                            <hr className='border-white mt-5 mb-5'/>
                        </div>
                    </div>
                </div>
                <div className='container-xl mt-5'>
                    <div className='row mb-0'>
                        <div className="col-12 col-lg-4">
                            <h3 className="fs-3 fw-bold mb-4">OTHER ARTICLES</h3>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-3">
                        <div className="col mb-4">
                            <div className="card card-blog h-100 border-0">
                                <img src="https://www.dropbox.com/scl/fi/54piuxkyqd4ksu0yabkun/filip-eliasson-qaF4IhTuZv0-unsplash.webp?rlkey=hwp8wirl76frdf8n7qdwxhm40&st=gdhe4nae&raw=1" className="card-img-top mb-1 rounded-2" alt="..."/>
                                <div className="card-body">
                                    <p className="card-title text-uppercase fw-bold">Card title </p>
                                </div>
                                <div className='card-footer text-end'>
                                    <Link href={'/blog/detail/'} className="btn btn-blog fw-bold rounded-pill px-4 justify-content-end">READ ARTICLE</Link>
                                </div>
                            </div>
                        </div>
                       
                        
                        <div className="col mb-4">
                            <div className="card card-blog h-100 border-0">
                                <img src="https://www.dropbox.com/scl/fi/54piuxkyqd4ksu0yabkun/filip-eliasson-qaF4IhTuZv0-unsplash.webp?rlkey=hwp8wirl76frdf8n7qdwxhm40&st=gdhe4nae&raw=1" className="card-img-top mb-1 rounded-2" alt="..."/>
                                <div className="card-body">
                                    <p className="card-title text-uppercase fw-bold">Card title </p>
                                </div>
                                <div className='card-footer text-end'>
                                    <button type="button" className="btn btn-blog fw-bold rounded-pill px-4 justify-content-end">READ ARTICLE</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col mb-4">
                            <div className="card card-blog h-100 border-0">
                                <img src="https://www.dropbox.com/scl/fi/54piuxkyqd4ksu0yabkun/filip-eliasson-qaF4IhTuZv0-unsplash.webp?rlkey=hwp8wirl76frdf8n7qdwxhm40&st=gdhe4nae&raw=1" className="card-img-top mb-1 rounded-2" alt="..."/>
                                <div className="card-body">
                                    <p className="card-title text-uppercase fw-bold">Card title </p>
                                </div>
                                <div className='card-footer text-end'>
                                    <button type="button" className="btn btn-blog fw-bold rounded-pill px-4 justify-content-end">READ ARTICLE</button>
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
  