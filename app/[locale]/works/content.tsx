'use client';
// import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../generalplana.css'; // Import global styles
import '../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import useWorksAll   from  '../works/usecase/useWorksAll';


export default function Works() {

  type WorkItem = {
    id: string;
    titleID: string;
    image: string;
    imageDesc:string;
    slug:string;
  };


  const [dataWorks, setDataWorks] = useState<WorkItem[]>([]);// 'any' to handle dynamic response structure
  const { worksDataAll } = useWorksAll(); 

  useEffect(() => {
    setDataWorks(worksDataAll);
  }, [worksDataAll]);

    return (    
        <><div className="section headpage px-4 px-xl-0">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h2 className='text-uppercase display-6 fw-bold'>Every project is crafted to captivate and inspire.</h2>
            </div>
          </div>
        </div>
      </div><div className='section px-4 px-xl-0'>
          <div className='container-xl'>
            <div className="row row-cols-1 row-cols-lg-3">
              {Array.isArray(dataWorks) &&
                dataWorks.map((item: WorkItem, index) => (
                  <Link key={index} href={`/works/${item.slug}`} className="text-decoration-none text-reset">
                    <div className="col">
                      <div className="card card-project h-100 bg-transparent border-0">
                        <Image
                          src={item.image}
                          width={16}
                          height={9} layout="responsive"
                          className="card-img-top mb-1 rounded-2"
                          alt={item.imageDesc}>
                        </Image>

                        <div className="card-body p-0">
                          <div className="row g-0">
                            <div className="col-1 d-flex justify-content-center pb-1">
                              {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clapperboard-icon lucide-clapperboard pb-1 project-icon"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" /><path d="m6.2 5.3 3.1 3.9" /><path d="m12.4 3.4 3.1 4" /><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /></svg> */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-camera-icon lucide-camera pb-1 project-icon"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                            </div>
                            <div className="col-11">
                              <p className="card-title text-uppercase fw-bold">{item.titleID}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div><div className="section py-5">
          <div className="py-5"></div>
        </div></>
    );
  }
  