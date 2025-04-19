'use client';
// import type { AppProps } from 'next/app';
// import Link from 'next/link';
import '../generalplana.css'; // Import global styles
import '../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Social from '../../components/Social';


export default function Detail() {
    return (    
        <>
        <Navbar />
        <Social/>
        <main>
            <div className="section">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">
                            <h2>Every project is crafted to captivate and inspire.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
        
    );
  }
  