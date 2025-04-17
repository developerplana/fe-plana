'use client';
// import type { AppProps } from 'next/app';
import Link from 'next/link';
import '../generalplana.css'; // Import global styles
import '../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
import Social from '../../components/Social';


export default function About() {
    return (    
        <>
        <Navbar />
        <Social/>
        <main>
            <div className="section headpage px-4 px-xl-0">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='text-uppercase display-5 fw-bold'>Insights, inspirations, industry trends—<br></br>and everything in between.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section px-4 px-xl-0'>
                <div className='container-xl'>
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
                <div className="py-5"></div>
            </div>
        </main>
        {/* <Footer/> */}
        </>
        
    );
  }
  