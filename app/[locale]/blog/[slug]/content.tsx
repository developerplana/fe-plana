'use client';
// import type { AppProps } from 'next/app';
import Link from 'next/link';
import '../../generalplana.css'; // Import global styles
import '../../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import useBlogsSlug   from  '../usecase/useBlogsSlug';
import useBlogsAll   from  '../usecase/useBlogsAll';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function BlogDetail() {
    type BlogItem = {
        [x: string]: string;
        id: string;
        titleID: string;
        titleEN: string;
        descID: string;
        descEN:string;
        image:string;
        altImageDesc:string;
        author:string;
      };
      
    type BlogItemDetail = {
        id: string;
        titleID: string;
        titleEN: string;
        descID: string;
        descEN:string;
        image:string;
        altImageDesc:string;
        author:string;
      };
      //get API works
      const params = useParams();
      const slug = params?.slug;
      
      const [dataBlogs, setDataBlogs] = useState<BlogItem[]>([]);
      const [dataBlogsSlug, setDataBlogsSlug] = useState<BlogItemDetail | null>(null);
      const { blogsDataSlug } = useBlogsSlug(String(slug)); // Convert slug to string
      const { blogsData } = useBlogsAll(); // Convert slug to string
      
      useEffect(() => {
        if (blogsData) { // Check if blogsData exists
          setDataBlogs(blogsData);
        }
        setDataBlogsSlug(blogsDataSlug)
        
      }, [blogsData, blogsDataSlug]);

      const imageUrl = dataBlogsSlug?.image;

    return (    
        <>
            <div className="section px-4 px-xl-0">
                <div className='container-xl'>
                    <div className='row justify-content-center'>
                        <div className="col-12 col-lg-10">
                            <h1 className='text-uppercase fw-bold mb-4'>{dataBlogsSlug?.titleID}</h1>
                            {imageUrl && (
                                <Image 
                                src={imageUrl}
                                width={16}
                                height={9}
                                layout="responsive" 
                                className="card-img-top mb-1 rounded-2" 
                                alt={dataBlogsSlug?.altImageDesc || ''} />
                            )}
                            <p className='fs-5 fw-normal mb-2 mt-3'>By {dataBlogsSlug?.author} | Published in 22 May 2025</p>
                            {/* <hr className='border-white py-3' /> */}
                                <div className="rich-content" dangerouslySetInnerHTML={{ __html: dataBlogsSlug?.descID || '' }} />
                            {/* <hr className='border-white mt-5 mb-5' /> */}
                        </div>
                    </div>
                </div>
                <div className='container-xl mt-5'>
                    <div className='row mb-0'>
                        <div className="col-12 col-lg-4">
                            <h3 className="fs-3 fw-bold mb-4">OTHER ARTICLES</h3>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-3">
                    {Array.isArray(dataBlogs) &&
                         dataBlogs.slice(0, 3).map((item: BlogItem, index) => (
                            <div key={index} className="col mb-4">
                                <div className="card card-blog h-100 border-0">
                                    <Image
                                    src={item.image}
                                    width={16}
                                    height={9}
                                    layout="responsive"
                                    className="card-img-top mb-1 rounded-2"
                                    alt="Blog image"
                                    />
                                    <div className="card-body">
                                    <p className="card-title text-uppercase fw-bold">{item.title}</p>
                                    </div>
                                    <div className="card-footer text-end">
                                    <Link href={`/blog/${item.slug}`} className="btn btn-blog fw-bold rounded-pill px-4 justify-content-end">
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
              <div className="py-5">

              </div>
            </div>
        </>
    );
  }
  