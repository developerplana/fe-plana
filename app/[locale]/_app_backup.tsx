import type { AppProps } from 'next/app';
import Link from 'next/link';
import '../[locale]/generalplana.css'; // Import global styles
import '../[locale]/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Social from './components/Social';
// import {Html, Head, Main, NextScript} from 'next/document';

// Import Navbar component
// import 'https://fonts.googleapis.com';
// import 'https://fonts.gstatic.com';
// import 'https://fonts.googleapis.com/css2?family=Exo:wght@700&family=Montserrat:wght@500&display=swap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href="https://fonts.googleapis.com/css family=Exo:wght@700&family=Montserrat:wght@500&display=swap" rel="stylesheet"/>
      <Link href="#someid" scroll={false}/>
      <Navbar /> {/* Include the Navbar on all pages */}
      <Social/>
      <Component {...pageProps} /> {/* Render the current page */}
      <Footer/>
    </>
  );
}

export default MyApp;
