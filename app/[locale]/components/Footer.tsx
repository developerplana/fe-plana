// import Link from 'next/link';
import styles from '../footer.module.css'; // Custom styles
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
    return (
      <footer className={`${styles.footerbottom} position-relative`}>
        <div className={`${styles.marketingbox} z-2 position-absolute mx-auto top-0 start-50 translate-middle px-3 px-lg-5 py-2 py-lg-4 rounded-4`}>
          <div className='container-fluid text-center px-2 px-lg-5'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                  <p className='display-5 fw-bold text-light'>GOT A PROJECT IN MIND?</p>
                  <Link href="/contact" className="btn btn-plana fw-bold rounded-pill px-4 justify-content-end">LETS TALK</Link>
                  
                </div>
            </div>
          </div>
        </div>
        
        <div className={`container-xl`} >
          <div className='row align-bottom'>
            <div className='col-12 col-lg-8 align-bottom'>
              <Image 
                  src="/images/PlanaWHITE.webp" 
                  width={120}
                  height={60}
                  alt="profile"
                  className="img-fluid pb-3"
                />
            </div>
            <div className='col-12 col-lg-4 align-bottom'>
              <p className='fs-5 text-light'>
                PT Gajah Gendut Makmur<br/>Jl. Lebak bulus III No. 88 - Unit C Cilandak Barat - Jakarta Selatan<br/>DKI Jakarta 12440
              </p>
            </div>
          </div>

        </div>
      </footer>
    );
  };
  
  export default Footer;