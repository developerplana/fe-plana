import Link from "next/link"

export default function Home() {
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
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <figure className="figure">
                        <img src="https://placehold.co/1000" className="figure-img img-fluid rounded" alt="..."></img>
                        <figcaption className="figure-caption text-light fs-6 text-uppercase fw-bold">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clapperboard-icon lucide-clapperboard pb-1 project-icon"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>&nbsp;
                          A caption for the above image.
                        </figcaption>
                      </figure>
                      <figure className="figure">
                        <img src="https://placehold.co/1000" className="figure-img img-fluid rounded" alt="..."></img>
                        <figcaption className="figure-caption text-light fs-6 text-uppercase fw-bold">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clapperboard-icon lucide-clapperboard pb-1 project-icon"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>&nbsp;
                         A caption for the above image.</figcaption>
                      </figure>
                      <figure className="figure">
                        <img src="https://placehold.co/1000" className="figure-img img-fluid rounded" alt="..."></img>
                        <figcaption className="figure-caption text-light fs-6 text-uppercase fw-bold">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-camera-icon lucide-camera pb-1 project-icon"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>&nbsp;
                          A caption for the above image.</figcaption>
                      </figure>
                      <figure className="figure">
                        <img src="https://placehold.co/1000" className="figure-img img-fluid rounded" alt="..."></img>
                        <figcaption className="figure-caption text-light fs-6 text-uppercase fw-bold">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-camera-icon lucide-camera pb-1 project-icon"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>&nbsp;
                          A caption for the above image.</figcaption>
                      </figure>
                    </div>
                    <div className="col-12 col-lg-6">
                      <figure className="figure">
                        <img src="https://placehold.co/1000" className="figure-img img-fluid rounded" alt="..."></img>
                        <figcaption className="figure-caption text-light fs-6 text-uppercase fw-bold">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clapperboard-icon lucide-clapperboard pb-1 project-icon"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>&nbsp;
                          A caption for the above image.
                        </figcaption>
                      </figure>
                      <figure className="figure">
                        <img src="https://placehold.co/1000" className="figure-img img-fluid rounded" alt="..."></img>
                        <figcaption className="figure-caption text-light fs-6 text-uppercase fw-bold">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clapperboard-icon lucide-clapperboard pb-1 project-icon"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>&nbsp;
                         A caption for the above image.</figcaption>
                      </figure>
                      <figure className="figure">
                        <img src="https://placehold.co/1000" className="figure-img img-fluid rounded" alt="..."></img>
                        <figcaption className="figure-caption text-light fs-6 text-uppercase fw-bold">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-camera-icon lucide-camera pb-1 project-icon"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>&nbsp;
                          A caption for the above image.</figcaption>
                      </figure>
                      <figure className="figure">
                        <img src="https://placehold.co/1000" className="figure-img img-fluid rounded" alt="..."></img>
                        <figcaption className="figure-caption text-light fs-6 text-uppercase fw-bold">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-camera-icon lucide-camera pb-1 project-icon"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>&nbsp;
                          A caption for the above image.</figcaption>
                      </figure>
                    </div>
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
  