'use client';
import Link from 'next/link';
import styles from '../app/navbar.module.css'; // Custom styles

const Navbar = () => {
  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${styles.navbar}`}>
      <div className="container-xl">
        {/* Logo */}
        <Link href="/" className={`${styles.logo}`}>
          <span>PLANĂ</span>
        </Link>

        {/* Toggle Button for Mobile View */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        </div>

        {/* Language Switcher */}
        <div className={`${styles.languageSwitcher}`}>
          <Link href="#" className={`fw-bold text-light p-2 ${styles.active}`}>EN</Link>
          <span className='text-white fw-bold'>&nbsp;|&nbsp;</span>
          <Link href="#" className={`fw-bold text-light p-2 ${styles.unactive}`}>ID</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
