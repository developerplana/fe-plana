import Link from 'next/link';
import styles from '../app/footer.module.css'; // Custom styles

const Footer = () => {
    return (
      <footer className={`${styles.footerbottom} position-relative`}>
        <div className={`${styles.marketingbox} z-2 position-absolute mx-auto top-0 start-50 translate-middle px-3 px-lg-5 py-2 py-lg-4 rounded-4`}>
          <div className='container-fluid text-center px-2 px-lg-5'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                  <p className='display-5 fw-bold text-light'>GOT A PROJECT IN MIND?</p>
                  <button type="button" className="btn btn-plana fw-bold rounded-pill px-4 justify-content-end">LET'S TALK</button>
                </div>
            </div>
          </div>
        </div>
        
        <div className={`container-xl`} >
          <div className='row align-bottom'>
            <div className='col-12 col-lg-8 align-bottom'>
              <img className='img-fluid pb-4' src='https://plana.vision/wp-content/uploads/2023/01/Logo-Plana-White-min.png'/>
              <p className='fs-5 text-light'>Copyright © 2025 PLANA | ALL RIGHTS RESERVED</p>
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