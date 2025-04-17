'use client';
// import type { AppProps } from 'next/app';
// import Link from 'next/link';
import '../generalplana.css'; // Import global styles
import '../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
import Social from '../../components/Social';
import Image from 'next/image';


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
                            <h2 className='text-uppercase display-5 fw-bold'>WE BELIEVE IN THE CRAFT OF EXCEPTIONAL FILMMAKING.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section px-4 px-xl-0'>
                <div className='container-xl'>
                    <div className='row'>
                        <div className='col-12 col-lg-2'>
                            <h2 className='text-uppercase display-5 fw-bold'>
                                About Plana
                            </h2>
                        </div>
                        <div className='col-12 col-lg-10'>
                            <div className='row mb-4'>
                                <div className='col-12 col-lg-6'>
                                    <p>
                                        PLANA was founded in 2021 as an award winning production company based in Jakarta, Indonesia. We make films for money. LOL, NO, we make films to make you comfortable. Like our name. PLANA is not only a word, it is a belief. Our belief that we exist to make you comfortable, whenever you have make films or commercials for your brand.
                                    </p>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <Image src="https://dropbox.com/scl/fi/jbyorr0gmq5jmx8d6tjj1/plana-shoot-2.webp?rlkey=kzfxv24a02ok8rnjbkt1pchmh&st=cac2q5zl&raw=1" width={16} height={9}layout="responsive" className="card-img-top mb-1 rounded-2" alt=""></Image>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-lg-6'>
                                    <Image src="https://dropbox.com/scl/fi/f36y9dhtt9yvcvnfgnt4s/plana-shoot-3.webp?rlkey=s7xj7164g0s54eskxxqkys55w&st=h91n1owj&raw=1" width={16} height={9}layout="responsive" className="card-img-top mb-1 rounded-2" alt=""></Image>
                                    
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <p>
                                        At Plana, we bridge the gap between global creativity and local proficiency. Our mission is to elevate Indonesia’s creative industry by blending world-class expertise with local talents, delivering exceptional production value for clients both locally and globally. By assembling the right team for each project, we transform ideas into compelling visual experiences. Whether working with local brands or international giants, our goal is to deliver unparalleled quality, creativity, and professionalism in every frame.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section section-service px-4 px-xl-0'>
                 <div className="container-xl">
                    <div className='row'>
                    <div className='col-12'>
                            <h3 className='text-uppercase display-5 fw-bold mb-4'>
                                Our Service
                            </h3>
                        </div>
                        <div className='col-12'>
                            <div className="card mb-3 bg-transparent service rounded-4">
                                <div className="row g-0">
                                    <div className="col-lg-4">
                                        <div className='service-image-1 d-none d-lg-block rounded-start-4'></div>
                                        <div className='service-image-mobile-1 d-block d-lg-none rounded-top-4'></div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="card-body py-4">
                                            <h3 className="card-title display-6 fw-bold">VIDEO PRODUCTION SERVICES</h3>
                                            <p className="card-text">We offer comprehensive full production services that take your project from concept to completion. We meticulously assemble the perfect team for each project, ensuring that every detail aligns with your vision. From pre-production planning to on-set execution, and through to post-production supervision, we handle every aspect with precision and expertise. Our goal is to deliver a seamless experience that results in high-quality, impactful content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='card mb-3 bg-transparent service rounded-4'>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <div className='service-image-2 d-none d-lg-block rounded-start-4'></div>
                                    <div className='service-image-mobile-2 d-block d-lg-none rounded-top-4'></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body py-4">
                                        <h3 className="card-title display-6 fw-bold">FULL ANIMATION</h3>
                                        <p className="card-text">Our Full Animation service is designed to integrate and streamline various post-production elements into a cohesive and visually stunning final product. We collaborate with top-tier animators, CG artists, AI artists, and musicians, carefully selecting the right director to bring the creative vision to life. By managing the entire post-production pipeline, we ensure that all aspects of the project are harmoniously aligned, delivering a polished and immersive visual experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div className='section px-4 px-xl-0'>
                 <div className='container-xl'>
                    <div className='row mb-5'>
                        <div className='col-12'>
                            <h3 className='text-uppercase display-5 fw-bold'>
                                Founders
                            </h3>
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <div className='col-lg-4'>
                            <Image src="https://dropbox.com/scl/fi/it8lutpgb0x6fmeexhlyj/image-46.webp?rlkey=3cloclxiwldxlipooievn4ohe&st=68ahocx4&raw=1" width={16} height={9}layout="responsive" className="card-img-top mb-1 rounded-2" alt=""></Image>
                            
                        </div>
                        <div className='col-lg-8'>
                            <figure>
                                <blockquote className="blockquote">
                                    <h4 className='fw-bold display-6'>AMBI FAURI</h4>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <span className='h5 text-light'>Executive Producer</span>
                                </figcaption>
                            </figure>
                            <p>
                            With a rich background in advertising and production, Ambi Fauri started his career in Account Management before moving into production. His experience at Shooting Gallery Asia, with its offices across Southeast Asia and China, connected him to a global network. </p>
                            <p>In 2012, he founded Fat Belly Pictures, and later, Plana in 2022, where he continues to lead with a blend of global insight and local expertise.</p>
                            <p>His love for the art film-making, is greater than the love of great food and whisky.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <Image src="https://dropbox.com/scl/fi/quv41lqv2p07ommlqs7zc/image.webp?rlkey=5dvwdl89b8qxtinimkefybn3a&st=wlj1dvwv&raw=1" width={16} height={9}layout="responsive" className="card-img-top mb-1 rounded-2" alt=""></Image>
                            
                        </div>
                        <div className='col-lg-8'>
                            <figure>
                                <blockquote className="blockquote">
                                    <h4 className='fw-bold display-6'>EDIWN SYAMSUDDIN</h4>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <span className='h5 text-light'>Finance Director</span>
                                </figcaption>
                            </figure>
                            <p>
                            With over a decade of experience in finance, Edwin began his career at Bank Mandiri, where he rose to Section Head in the Commercial Risk Group. In 2013, he transitioned to the creative industry, joining PT Fatbelly Pictures as Finance Director. </p>
                            <p>At Plana, Edwin ensures financial stability, supporting the seamless execution of every production and bringing creative visions to life.</p>
                            <p>His passion for crunching numbers is only surpassed by his love for kecap manis.</p>
                        </div>
                    </div>
                 </div>
            </div>
            <div className='section py-5 px-4 px-xl-0'>
                 <div className="py-5"></div>
            </div>
        </main>
        {/* <Footer/> */}
        </>
        
    );
  }
  