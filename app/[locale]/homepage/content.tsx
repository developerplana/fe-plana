'use client';
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useWorks } from '../hooks/useWorks';

export default function HomePage() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS loaded');
      })
      .catch(err => console.error('Failed to load Bootstrap JS', err));
  }, []);
  
  type WorkItem = {
    [x: string]: string;
    id: string;
    titleID: string;
    image: string;
  };

  //get API works
  const [dataWorks, setDataWorks] = useState<WorkItem[]>([]);// 'any' to handle dynamic response structure
  const { works, error, isLoading  } = useWorks(); 

  useEffect(() => {
    setDataWorks(works);
  }, [works]);

  // if (loadingWorks) return <p>Loading...</p>;
  if (isLoading) return <p>Loading works...</p>;
  if (error) return <p>Error loading works.</p>;

    return (
      <><main>
          <div className="section py-4 py-lg-5 px-2 px-xl-0">
            <div className="container-xl py-4 py-lg-5">
              <div className="row hero gy-0 gy-lg-5">
                <div className="col-12 col-lg-7 col-xl-6">
                  <h1 className="display-4 fw-bold">BE IN THE PLANA.<br />
                    GO FORWARD WITH COMFORT.</h1>
                  <p className="d-block d-lg-none">Saddle up! Plana is the mustang of advertising film production, delivering fast, creative solutions for local and international clients. No project is too wild—ride toward success with Plana!</p>
                </div>
                <div className="col-12 col-lg-5 col-xl-6 pt-lg-5 pt-0">
                  <p className="pt-lg-5 d-none d-lg-block">Saddle up! Plana is the mustang of advertising film production, delivering fast, creative solutions for local and international clients. No project is too wild—ride toward success with Plana!</p>
                </div>
                <div className="col-12">
                  <Link href="#anti-hero">
                    <div id="scroll-down-animation mx-0">
                      <span className="mouse">
                        <span className="move"></span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <ul className="slideshow">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            
          </div>
          <div className="anti-hero" id="anti-hero">
            <div className="section px-4 px-xl-0">
              <div className="container-xl">
                <div className="row d-flex">
                  <div className="col-12 col-lg-4 d-none d-lg-block">
                      <div className="sticky">
                        <h2 className="display-6 fw-bold">FEATURED WORKS</h2>
                        <p>With PLANA, we live to produce films, commercials, branded content, feature length projects. Every project is a fusion of creativity, precision, and storytelling, crafted to captivate and inspire. From concept to execution, we push boundaries to create visually stunning and emotionally compelling experiences.</p>
                          <Link href="/works" className="btn btn-plana fw-bold rounded-pill px-4 justify-content-end">
                            SEE ALL WORKS
                          </Link>
                      </div>
                  </div>
                  <div className="col-12 col-lg-4 d-block d-lg-none mb-4">
                    <h2 className="display-6 fw-bold">FEATURED WORKS</h2>
                    <p>With PLANA, we live to produce films, commercials, branded content, feature length projects. Every project is a fusion of creativity, precision, and storytelling, crafted to captivate and inspire. From concept to execution, we push boundaries to create visually stunning and emotionally compelling experiences.</p>
                      <Link href="/works" className="btn btn-plana fw-bold rounded-pill px-4 justify-content-end">
                        SEE ALL WORKS
                      </Link>
                  </div>
                  <div className="col-12 col-lg-8">
                    <div className="row row-cols-1 row-cols-lg-2">
                    {Array.isArray(dataWorks) &&
                    dataWorks.slice(0, 6).map((item: WorkItem, index) => (
                      <div className="col mb-4" key={index}>
                        <Link href={`/works/${item.titleID}`} className="text-decoration-none text-reset">
                          <div className="card card-project h-100 bg-transparent border-0">
                            <Image
                              src={
                                process.env.NEXT_PUBLIC_LARAVEL_BASE_URL?.includes("http://127.0.0.1:8000")
                                  ? `${item.image?.replace(/^\//, "")}`
                                  : `${item.image}`
                              }
                              width={1}
                              height={1}
                              layout="responsive"
                              className="card-img-top mb-1 rounded-2"
                              alt={item.imageDesc}
                              priority={false}
                            />
                            <div className="card-body p-0">
                              <div className="row g-0">
                                <div className="col-1 d-flex justify-content-center pb-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clapperboard-icon lucide-clapperboard pb-1 project-icon"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" /><path d="m6.2 5.3 3.1 3.9" /><path d="m12.4 3.4 3.1 4" /><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /></svg>
                                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-camera-icon lucide-camera pb-1 project-icon"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg> */}
                                </div>
                                <div className="col-11">
                                  <p className="card-title text-uppercase fw-bold">
                                    {item.titleID}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section about px-4 px-xl-0">
              <div className="container-xl">
                <div className="row">
                  <div className="col-12">
                    <h2 className="display-5 fw-bold py-5">WE BELIEVE IN THE CRAFT OF EXCEPTIONAL FILMMAKING. WE MERGE AESTHETICS AND STRATEGY TO BUILD COMPELLING NARRATIVES TO CONNECT, ENGANGE AMD LEAVE A LASTING IMPACT.</h2>
                    <Link href="/about" className="btn btn-plana fw-bold rounded-pill px-4 float-end">
                        MORE ABOUT PLANA
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="section py-5">
              <div className="py-5"></div>
            </div>
          </div>
        </main></>
    );
  }
  