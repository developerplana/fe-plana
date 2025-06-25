'use client';
import Image from 'next/image';


export default function About() {
    return (    
        <>
            <div className="section headpage px-4 px-xl-0">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='text-uppercase display-6 fw-bold'>WE BELIEVE IN THE CRAFT OF EXCEPTIONAL FILMMAKING.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section px-4 px-xl-0'>
                <div className='container-xl'>
                    <div className='row'>
                        <div className='col-12 col-lg-2'>
                            <h1 className='text-uppercase display-6 fw-bold'>
                                About Plana
                            </h1>
                        </div>
                        <div className='col-12 col-lg-10'>
                            <div className='row mb-4'>
                                <div className='col-12 col-lg-6'>
                                    <p>
                                        PLANA was founded in 2021 as an award winning production company based in Jakarta, Indonesia. We make films for money. LOL, NO, we make films to make you comfortable. Like our name. PLANA is not only a word, it is a belief. Our belief that we exist to make you comfortable, whenever you have make films or commercials for your brand.
                                    </p>
                                </div>
                                <div className='col-12 col-lg-6'>
                                <Image
                                    className='img-fluid'
                                    src='/images/plana-shoot-3.webp'
                                    alt='description'
                                    width={800} // you can adjust this
                                    height={600} // adjust this too
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-lg-6'>
                                     <Image
                                    className='img-fluid'
                                    src='/images/plana-shoot-2.webp'
                                    alt='description'
                                    width={800} // you can adjust this
                                    height={600} // adjust this too
                                    />
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <p>
                                        At Plana, we bridge the gap between global creativity and local proficiency. Our mission is to elevate Indonesias creative industry by blending world-class expertise with local talents, delivering exceptional production value for clients both locally and globally. By assembling the right team for each project, we transform ideas into compelling visual experiences. Whether working with local brands or international giants, our goal is to deliver unparalleled quality, creativity, and professionalism in every frame.
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
                            <h3 className='text-uppercase display-6 fw-bold mb-4'>
                                Our Service
                            </h3>
                        </div>
                        <div className='col-12'>
                            <div className="card mb-4 bg-transparent service rounded-4">
                                <div className="row g-0">
                                    <div className="col-lg-3">
                                        <div className='service-image-1 d-none d-lg-block rounded-start-4'></div>
                                        <div className='service-image-mobile-1 d-block d-lg-none rounded-top-4'></div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body py-4">
                                            <h3 className="card-title h2 fw-bold">VIDEO PRODUCTION SERVICES</h3>
                                            <p className="card-text">We offer comprehensive full production services that take your project from concept to completion. We meticulously assemble the perfect team for each project, ensuring that every detail aligns with your vision. From pre-production planning to on-set execution, and through to post-production supervision, we handle every aspect with precision and expertise. Our goal is to deliver a seamless experience that results in high-quality, impactful content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='card mb-4 bg-transparent service rounded-4'>
                                <div className="row g-0">
                                    <div className="col-md-3">
                                    <div className='service-image-2 d-none d-lg-block rounded-start-4'></div>
                                    <div className='service-image-mobile-2 d-block d-lg-none rounded-top-4'></div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body py-4">
                                        <h3 className="card-title h2 fw-bold">FULL ANIMATION</h3>
                                        <p className="card-text">Our Full Animation service is designed to integrate and streamline various post-production elements into a cohesive and visually stunning final product. We collaborate with top-tier animators, CG artists, AI artists, and musicians, carefully selecting the right director to bring the creative vision to life. By managing the entire post-production pipeline, we ensure that all aspects of the project are harmoniously aligned, delivering a polished and immersive visual experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='card mb-4 bg-transparent service rounded-4'>
                                <div className="row g-0">
                                    <div className="col-md-3">
                                    <div className='service-image-3 d-none d-lg-block rounded-start-4'></div>
                                    <div className='service-image-mobile-3 d-block d-lg-none rounded-top-4'></div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body py-4">
                                        <h3 className="card-title h2 fw-bold">PHOTOGRAPHY</h3>
                                        <p className="card-text">Our Photography service is built to support commercial goals with clarity and creative intent. We craft visual assets that speak to your brand’s identity, whether for advertising campaigns, product launches, or editorial features. From pre-shoot planning to final image delivery, we manage the entire process with the same precision and collaborative spirit that defines our motion work. By assembling the right creative team for each project, we ensure every frame aligns with your message and meets the demands of high-impact visual storytelling.</p>
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
                            <h3 className='text-uppercase display-6 fw-bold'>
                                Founders
                            </h3>
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <div className='col-lg-4'>
                            <Image
                                className='img-fluid'
                                src="/images/ambi.webp" 
                                alt='description'
                                width={800}
                                height={600}
                            />
                        </div>
                        <div className='col-lg-8'>
                            <figure>
                                <blockquote className="blockquote">
                                    <h4 className='fw-bold h2'>AMBI FAURI</h4>
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
                            <Image
                                className='img-fluid'
                                src="/images/ambi2.webp" 
                                alt='description'
                                width={800}
                                height={600}
                            />
                        </div>
                        <div className='col-lg-8'>
                            <figure>
                                <blockquote className="blockquote">
                                    <h4 className='fw-bold h2'>EDWIN SYAMSUDDIN</h4>
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
        </>
        
    );
  }
  