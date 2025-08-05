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
                            <h1 className='display-6 fw-bold'>
                                About Plana
                            </h1>
                        </div>
                        <div className='col-12 col-lg-10'>
                            <div className='row mb-4'>
                                <div className='col-12 col-lg-6'>
                                    <p>
                                        PLANA was founded in 2021 as a creative production company based in Jakarta, Indonesia. We make films for money. LOL, NO, we make films to make you comfortable. Like our name.
                                        PLANA is more than just a name, it&apos;s a belief. A belief that creativity should feel effortless, that the production process should make you feel at ease, whether you&apos;re a bold startup or a big brand needing fresh content
                                    </p>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <Image
                                        className='img-fluid'
                                        src='/images/plana-shoot-3.webp'
                                        alt='Production company in Jakarta'
                                        width={800}
                                        height={600}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-lg-6'>
                                    <Image
                                        className='img-fluid'
                                        src='/images/plana-shoot-2.webp'
                                        alt='Production company in Jakarta'
                                        width={800}
                                        height={600}
                                    />
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <p>
                                        At Plana, we bridge the gap between global creativity and local know-how. Our mission is to elevate Indonesia’s creative industry by combining world-class expertise with the best local talents.
                                        As a Jakarta-based production company, we assemble the right team for every project—turning bold ideas into compelling visual experiences. Whether working with homegrown brands or international giants, we bring creativity, clarity, and comfort to every frame.
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
                            <h3 className='display-6 fw-bold mb-4'>
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
                                            <ul className="card-text">
                                                <li>Creative development & script support.</li>
                                                <li>Line production & local fixers.</li>
                                                <li>Full-scale commercial shoots</li>
                                                <li>Corporate video production</li>
                                                <li>Location scouting & permits</li>
                                                <li>Casting, art direction & styling</li>
                                                <li>Cinematography & directing</li>
                                                <li>Post-production: editing, sound, grading, animation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className='col-12'>
                            <div className='card mb-4 bg-transparent service rounded-4'>
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <div className='service-image-2 d-none d-lg-block rounded-start-4'></div>
                                        <div className='service-image-mobile-2 d-block d-lg-none rounded-top-4'></div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body py-4">
                                            <h3 className="card-title h2 fw-bold">FULL ANIMATION</h3>
                                            <p className="card-text">
                                                Animation is where imagination goes wild, and we love that. Our Full Animation service blends direction, CG artistry, AI tools, and sound design into one cohesive visual experience.
                                                Whether it&apos;s a playful explainer or a cinematic brand opener, our production company partners with top animators and musicians to bring your story to life, pixel by pixel.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
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
                                            <p className="card-text">
                                                <li>Campaign photography (fashion, lifestyle, automotive, product)</li>
                                                <li>Branded key visuals & hero shots</li>
                                                <li>On-location shoots across Indonesia</li>
                                                <li>Editorial-style content & stills during film shoots</li>
                                                <li>Full crew & equipment handling</li>
                                            </p>
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
                            <h2 className=' display-6 fw-bold'>
                                Founders
                            </h2>
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <div className='col-lg-4'>
                            <Image
                                className='img-fluid'
                                src="/images/ambi.webp"
                                alt='Production company in Jakarta'
                                width={800}
                                height={600}
                            />
                        </div>
                        <div className='col-lg-8'>
                            <figure>
                                <blockquote className="blockquote">
                                    <h3 className='fw-bold h2'>AMBI FAURI</h3>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <h3><span className='h5 text-light'>Executive Producer</span></h3>
                                </figcaption>
                            </figure>
                            <p>
                                With a background in advertising and film production, Ambi started in Account Management before joining Shooting Gallery Asia. His career led him across Southeast Asia and China, building a global production network
                            </p>
                            <p>
                                In 2012, he founded Fat Belly Pictures. In 2022, Plana was born, built on his belief that a production company should feel like home: fast, reliable, and always in sync with creative ambition.
                            </p>
                            <p>
                                His love for filmmaking is only rivaled by his love for great food and fine whisky.
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <Image
                                className='img-fluid'
                                src="/images/ambi2.webp"
                                alt='Production company in Jakarta'
                                width={800}
                                height={600}
                            />
                        </div>
                        <div className='col-lg-8'>
                            <figure>
                                <blockquote className="blockquote">
                                    <h3 className='fw-bold h2'>EDWIN SYAMSUDDIN</h3>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <h3><span className='h5 text-light'>Finance Director</span></h3>
                                </figcaption>
                            </figure>
                            <p>
                                After a decade in finance, including a role as Section Head at Bank Mandiri, Edwin took a wild turn into the creative industry. In 2013, he joined PT Fatbelly Pictures, then co-founded Plana in 2022.
                            </p>
                            <p>
                                At Plana, he makes sure the numbers make sense, so creativity doesn&apos;t have to worry. He keeps the production company financially grounded, so every wild idea gets its wings.
                            </p>
                            <p>
                                His obsession with spreadsheets is second only to his obsession with kecap manis
                            </p>
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
