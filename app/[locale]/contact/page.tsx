'use client';
// import type { AppProps } from 'next/app';
import Link from 'next/link';
import '../generalplana.css'; // Import global styles
import '../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
// import Footer from '../../components/Footer';
import Social from '../components/Social';


export default function Contact() {
    return (    
        <>
        <Navbar />
        <Social/>
        <main>
        <div className="section headpage px-4 px-xl-0">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='text-uppercase display-5 fw-bold'>SAY HI, DON’T BE SHY.<br/> 
                            DROP US A LINE AND MAKE SOMETHING HAPPEN.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section px-4 px-xl-0">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className='row'>
                                <div className='col-12 mb-4'>
                                    <p className='h5 fw-bold text-uppercase mb-0'>E-mail</p>
                                    <Link href={'mailto:ambi@plana.vision'}><p>ambi@plana.vision</p></Link>
                                </div>
                                <div className='col-12 mb-4'>
                                    <p className='h5 fw-bold text-uppercase mb-0'>Call</p>
                                    <Link href={'tel:+622139719799'}><p>+6221-39719799</p></Link>
                                </div>
                                <div className='col-12 mb-4'>
                                    <p className='h5 fw-bold text-uppercase mb-0'>Office</p>
                                    <p>
                                    PT Gajah Gendut Makmur<br/>Jl. Lebak bulus III No. 88 - Unit C<br/>Cilandak Barat - Jakarta Selatan<br/>DKI Jakarta 12440
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <form className='form-plana'>
                                <div className="mb-4">
                                    <label className="form-label h5 fw-bold text-uppercase">Your Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label h5 fw-bold text-uppercase">Your E-mail</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label h5 fw-bold text-uppercase">Your Whatsapp</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label h5 fw-bold text-uppercase">Subject</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label h5 fw-bold text-uppercase">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={4}></textarea>
                                </div>
                                <button type="submit" className="btn btn-plana fw-bold rounded-pill px-4">SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section px-4 px-xl-0 py-0'>
                 <iframe className='iframemap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589.5062686423366!2d106.78905873929337!3d-6.301827308700019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef64262426d7%3A0x3ab3b1607f95397a!2sPLANA!5e0!3m2!1sen!2sid!4v1744530269441!5m2!1sen!2sid" height="750" loading="lazy"></iframe>
            </div>
            <div className="section py-5">
                <div className="py-5"></div>
            </div>
        </main>
        {/* <Footer/> */}
        </>
        
    );
  }
  