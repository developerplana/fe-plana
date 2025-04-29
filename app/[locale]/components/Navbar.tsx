'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../navbar.module.css'; // Custom styles
import Switcher from './Switcher';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-dark fixed-top navbar-expand-lg ${styles.navbar}`}>
      <div className="container-xl">
        {/* Logo */}
        <Link href="/" className={`${styles.logo}`}>
        <Image src='https://dropbox.com/scl/fi/vzo8jtd3tvw9zfumy35c1/PlanaRED.png?rlkey=b3m5fvijrvyl2hd2y5712oihv&st=itdbox7z&raw=1' width="120" height="60" layout="intrinsic" alt="profile"
          className='img-fluid pb-3'></Image>
        </Link>

        {/* Toggle Button for Mobile View */}
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-3">
            <li className="nav-item">
              <Link href="/works/" className={`nav-link fw-bold text-light ${styles.unactive}`}>
                WORKS
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about/" className={`nav-link fw-bold text-light ${styles.unactive}`}>ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className={`nav-link fw-bold text-light ${styles.unactive}`}>BLOG</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link fw-bold text-light ${styles.unactive}`}>CONTACT</Link>
            </li>
          </ul>
        </div> */}
        
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
          <ul className="navbar-nav mx-3">
            <li className="nav-item">
              <Link href="/works/" className={`nav-link fw-bold text-light ${styles.unactive}`}>
                WORKS
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about/" className={`nav-link fw-bold text-light ${styles.unactive}`}>ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className={`nav-link fw-bold text-light ${styles.unactive}`}>BLOG</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link fw-bold text-light ${styles.unactive}`}>CONTACT</Link>
            </li>
          </ul>
          {/* <div className={`${styles.languageSwitcher} d-flex d-lg-none justify-content-center`}>
            <Link href="#" className={`fw-bold text-light mx-2 ${styles.active}`}>EN</Link>
                <span className='text-white fw-bold border-end border-white'> </span>
            <Link href="#" className={`fw-bold text-light mx-2 ${styles.unactive}`}>ID</Link>
          </div> */}
        
      </div>
    </div>

        {/* Language Switcher */}
          <Switcher />
      </div>
    </nav>
  );
};

export default Navbar;
