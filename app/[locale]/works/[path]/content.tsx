'use client';

import '../../generalplana.css'; // Import global styles
import '../../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Image from 'next/image';
import useWorksPath from  '../usecase/useWorksId';
import useWorksAll from '../usecase/useWorksAll';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  

export default function Page() {
    const params = useParams();
    const rawPath = params?.path;

    type WorkItem = {
        [x: string]: string;
        id: string;
        titleID: string;
        image: string;
        urlYoutube:string;
        descID:string;
        director:string;
        yearProduction:string;
        client:string;
        behindTheScreen:string;
    };
    const [dataWorks, setDataWorks] = useState<WorkItem | null>(null);
    const { worksData } = useWorksPath(rawPath as string);
    const { worksDataAll } = useWorksAll();

    useEffect(() => {
        if(worksData){
            setDataWorks(worksData)
        }
    }, [worksData]);
    let behindTheScreenImages: string[] = [];

    try {
      const raw = String(dataWorks?.behindTheScreen || '');
    
      if (raw.trim().startsWith('[')) {
        // Looks like JSON array
        behindTheScreenImages = JSON.parse(raw);
      } else {
        // Comma-separated string
        behindTheScreenImages = raw.split(',').map(s => s.trim()).filter(Boolean);
      }
    } catch (e) {
      console.error('Invalid format for behindTheScreen:', e);
    }
    
    
    return (    
        <>
            <div className="section headpage px-4 px-xl-0">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='text-uppercase display-5 fw-bold'>Every project is crafted to captivate and inspire.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section px-4 px-xl-0'>
                <div className='container-xl'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <ul className='plana-work'>
                                <li className="text-uppercase fw-bold">
                                    <h2>{dataWorks?.titleID}</h2>
                                </li>
                            </ul>
                            {dataWorks?.urlYoutube ? (
                                <div className="video-container mb-4">
                                    <iframe
                                    className="responsive-iframe"
                                    src={dataWorks.urlYoutube}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    frameBorder="0"
                                    ></iframe>
                                </div>
                                ) : (
                                <p>No video available.</p>
                            )}
                           
                            <div className='row'>
                                <div className='col-12 col-lg-4'>
                                    <p className='mb-0'>Director</p>
                                    <p className='fw-bold text-uppercase'>{dataWorks?.director}</p>
                                </div>
                                <div className='col-12 col-lg-3'>
                                    <p className='mb-0'>Production Year</p>
                                    <p className='fw-bold text-uppercase'>{dataWorks?.yearProduction}</p>
                                </div>
                                {/* <div className='col-12 col-lg-5'>
                                    <p className='mb-0'>Client</p>
                                    <p className='fw-bold text-uppercase'>{dataWorks?.client}</p>
                                </div> */}
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                <Slider {...settings}>
                                {behindTheScreenImages.map((img, index) => (
                                    <div key={index} className="p-2">
                                        <Image
                                        src={img}
                                        alt={`Behind the scenes ${index + 1}`}
                                        width={800}
                                        height={600}
                                        className="img-fluid"
                                        />
                                    </div>
                                    ))}
                                </Slider>
                                </div>
                            </div>
                            <p>
                                {dataWorks?.descID}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section pt-1 px-4 px-xl-0'>
                <div className='container-xl'>
                    <div className="row d-flex">
                   
                    <div className="col-12 col-lg-4">
                        <h3 className="display-6 fw-bold mb-4">OTHER WORKS</h3>
                    </div>
                    <div className="col-12">
                    <div className="row row-cols-1 row-cols-lg-3">
                    {Array.isArray(worksDataAll) &&
                        worksDataAll.map((item: WorkItem, index) => (
                        <div className="col mb-4" key={index}>
                            <div className="card card-project h-100 bg-transparent border-0">
                                <Image 
                                 src={
                                    process.env.NEXT_PUBLIC_LARAVEL_BASE_URL?.includes("http://127.0.0.1:8000")
                                      ? `${item.image?.replace(/^\//, "")}`
                                      : `${item.image}`
                                  }
                                width={16} 
                                height={9}
                                layout="responsive" 
                                className="card-img-top mb-1 rounded-2" 
                                alt=""></Image>
                                <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-1 pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clapperboard-icon lucide-clapperboard pb-1 project-icon"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg></div>
                                    <div className="col-11">
                                    <p className="card-title text-uppercase fw-bold">{item.titleID} </p>
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
            <div className="section py-5">
              <div className="py-5">
              </div>
            </div>
        </>
        
    );
  }
  