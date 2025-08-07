'use client';
// import type { AppProps } from 'next/app';
import Link from 'next/link';
import Image from 'next/image';
import useBlogsAll   from  '../blog/usecase/useBlogsAll';
import { useEffect, useState } from 'react';

export default function Blog() {

    type BlogItem = {
        [x: string]: string;
        id: string;
        titleID: string;
        titleEN: string;
        descID: string;
        descEN:string;
        image:string;
        altImageDesc:string;
        slug:string;
        author:string;
      };
    
      //get API works
      const [dataBlogs, setDataBlogs] = useState<BlogItem[]>([]);// 'any' to handle dynamic response structure
      const { blogsData } = useBlogsAll(); 
    
      useEffect(() => {
        setDataBlogs(blogsData);
      }, [blogsData]);
    return ( 
        <>   
            <div className="section headpage px-4 px-xl-0">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">
                            <h1 className=' display-6 fw-bold'>Insights, Inspiration, and Industry <br></br>Notes from a Creative Production House</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section px-4 px-xl-0'>
                <div className='container-xl'>
                    <div className="row row-cols-1 row-cols-lg-3">
                    {Array.isArray(dataBlogs) &&
                        dataBlogs.map((item: BlogItem, index) => (
                            <div className="col mb-4" key={index}>
                                <div className="card card-blog h-100 border-0">
                                    <Image
                                    src={item.image}
                                    width={1}
                                    height={1}
                                    layout="responsive"
                                    className="card-img-top mb-1 rounded-2"
                                    alt={item.imageDesc} />
                                    <div className="card-body">
                                    <p className="card-title text-uppercase fw-bold">{item.titleID || "Card title"}</p>
                                    </div>

                                    <div className='card-footer text-end'>
                                    <Link
                                        href={`/blog/${item.slug}`}
                                        className="btn btn-blog fw-bold rounded-pill px-4 justify-content-end"
                                        >
                                        READ ARTICLE
                                        </Link>
                                    </div>
                          
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className="section py-5">
                <div className="py-5"></div>
            </div>
        </>
    );
  }
  