'use client';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import '../../generalplana.css'; // Import global styles
import '../../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../../components/Footer';
import Social from '../../../components/Social';


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
                    <div className='row'>
                        <div className='col-12'>
                           
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clapperboard-icon lucide-clapperboard pb-1 project-icon"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>
                                    <p className="card-title text-uppercase fw-bold">Card title </p>
                                
                            
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
  