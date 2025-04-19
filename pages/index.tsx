
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS loaded');
      })
      .catch(err => console.error('Failed to load Bootstrap JS', err));
  }, []);
  
  type WorkItem = {
    titleID: string;
    image: string;
  };

  //get API works
  const [dataWorks, setDataWorks] = useState<WorkItem[]>([]); // 'any' to handle dynamic response structure
  const [loadingWorks, setLoadingWorks] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/worksApi');
        setDataWorks(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoadingWorks(false);
      }
    };

    fetchData();
  }, []);

  if (loadingWorks) return <p>Loading...</p>;

    return (
      <main>
        <div className="section py-5 px-4 px-xl-0">
          <div className="container-xl">
            <div className="row hero gy-0 gy-lg-5">
              <div className="col-12 col-lg-7 col-xl-6">
                <h1 className="display-2 fw-bold">BE IN THE PLANA.<br/>
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
                    <h2 className="display-5 fw-bold">FEATURED WORKS</h2>
                    <p>With PLANA, we live to produce films, commercials, branded content, feature length projects. Every project is a fusion of creativity, precision, and storytelling, crafted to captivate and inspire. From concept to execution, we push boundaries to create visually stunning and emotionally compelling experiences.</p>
                    <button type="button" className="btn btn-plana fw-bold rounded-pill px-4 justify-content-end">SEE ALL WORKS</button>
                  </div>
                </div>
                <div className="col-12 col-lg-4 d-block d-lg-none mb-4">
                  <h2 className="display-5 fw-bold">FEATURED WORKS</h2>
                  <p>With PLANA, we live to produce films, commercials, branded content, feature length projects. Every project is a fusion of creativity, precision, and storytelling, crafted to captivate and inspire. From concept to execution, we push boundaries to create visually stunning and emotionally compelling experiences.</p>
                  <button type="button" className="btn btn-plana fw-bold rounded-pill px-4 justify-content-end">SEE ALL WORKS</button>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="row row-cols-1 row-cols-lg-2">
                  {dataWorks.map((item: WorkItem, index) => (
                    <div className="col mb-4" key={index}>
                      <div className="card card-project h-100 bg-transparent border-0">
                        <Image src={item.image} width={1} height={1}layout="responsive" className="card-img-top mb-1 rounded-2" alt=""></Image>
                        <div className="card-body p-0">
                          <div className="row g-0">
                            <div className="col-1 pt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-camera-icon lucide-camera project-icon"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                            </div>
                            <div className="col-11">
                              <p className="card-title text-uppercase fw-bold">{item.titleID}</p>
                            </div>
                          </div>
                        </div>
                      </div>
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
                <h2 className="display-3 fw-bold py-5">WE BELIEVE IN THE CRAFT OF EXCEPTIONAL FILMMAKING. WE MERGE AESTHETICS AND STRATEGY TO BUILD COMPELLING NARRATIVES TO CONNECT, ENGANGE AMD LEAVE A LASTING IMPACT.</h2>
                <button type="button" className="btn btn-plana fw-bold rounded-pill px-4 float-end">MORE ABOUT PLANA</button>
                </div>
              </div>
            </div>
          </div>
          <div className="section py-5">
              <div className="py-5"></div>
          </div>
        </div>
      </main>
    );
  }
  