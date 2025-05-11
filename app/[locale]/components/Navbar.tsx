'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../navbar.module.css'; // Custom styles
import Switcher from './Switcher';
import { useParams } from 'next/navigation';

const Navbar = () => {
  const params = useParams();
  const locale = typeof params?.locale === 'string' ? params.locale : 'en'; // fallback to 'en'

  return (
    <nav className={`navbar navbar-dark fixed-top navbar-expand-lg ${styles.navbar}`}>
      <div className="container-xl">
        {/* Logo */}
        <Link href={`/${locale}`} className={`${styles.logo}`}>
          <Image 
            src="/images/PlanaRED.webp" 
            width={120}
            height={60}
            alt="profile"
            className="img-fluid pb-3"
          />
        </Link>

        {/* Toggle Button for Mobile View */}
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu */}
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav mx-3">
              <li className="nav-item">
                <Link href={`/${locale}/works/`} className={`nav-link fw-bold text-light ${styles.unactive}`}>
                  WORKS
                </Link>
              </li>
              <li className="nav-item">
                <Link href={`/${locale}/about/`} className={`nav-link fw-bold text-light ${styles.unactive}`}>ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link href={`/${locale}/blog`} className={`nav-link fw-bold text-light ${styles.unactive}`}>BLOG</Link>
              </li>
              <li className="nav-item">
                <Link href={`/${locale}/contact`} className={`nav-link fw-bold text-light ${styles.unactive}`}>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Language Switcher */}
        <Switcher />
      </div>
    </nav>
  );
};

export default Navbar;
