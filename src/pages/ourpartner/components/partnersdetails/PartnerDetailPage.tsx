import React from "react";
import bg from "assets/images/gallery/page-title-bg-1.jpg";
import img from "assets/images/partners/attachment_129000522.jpg";
import { Link } from "react-router-dom";
import bg2 from "assets/images/carousel/bg_2.jpg";

function PartnerDetailPage() {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: `url(  ${bg})`,
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="pb-5 col-md-9">
              <p className="mb-2 breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span>
                  Partner detail <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Partner detail</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="mb-12 row">
                  <div className="col-md-4">
                    <div
                      style={{ alignItems: "center", minHeight: 100 }}
                      className=" d-flex"
                    >
                      <img
                        style={{
                          maxHeight: "80px",
                          marginBottom: 10,
                          border: "1px solid",
                          borderRadius: "50%",
                          marginRight: 15,
                        }}
                        src={img}
                        alt=""
                      />
                      <h1>FaceBook</h1>
                    </div>
                    <div className="contact">
                      <h3>Email: facebook@meta.com</h3>
                      <h3>
                        Website:{" "}
                        <a href="https://about.meta.com/">
                          https://about.meta.com
                        </a>
                      </h3>
                    </div>
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo eius, doloremque voluptas placeat ullam tempore!
                      Voluptates officiis illum, ea sunt possimus praesentium
                      voluptate? Molestiae, odio minus! Aut dolor fuga eaque!
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div style={{ minHeight: 100 }} className="title">
                      <h1>Program</h1>
                    </div>
                    <div className="program">
                      <div className="row">
                        <div className="col-md-6 col-lg-4">
                          <div className="text-center causes causes-2 ftco-animate">
                            <a
                              href="#"
                              className="img w-100"
                              style={{ backgroundImage: `url(  ${bg2})` }}
                            />
                            <div className="p-3 text">
                              <h2>
                                <a href="#">
                                  Save the poor children from hunger
                                </a>
                              </h2>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia
                              </p>
                              <div className="mb-4 goal">
                                <p>
                                  <span>$3,800</span> to go
                                </p>
                                <div
                                  className="progress"
                                  style={{ height: 20 }}
                                >
                                  <div
                                    className="progress-bar progress-bar-striped"
                                    style={{ width: "95%", height: 20 }}
                                  >
                                    95%
                                  </div>
                                </div>
                              </div>
                              <p>
                                <Link
                                  to="/causedetails"
                                  className="btn btn-light w-100"
                                >
                                  Donate Now
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="text-center causes causes-2 ftco-animate">
                            <a
                              href="#"
                              className="img w-100"
                              style={{ backgroundImage: `url(  ${bg2})` }}
                            />
                            <div className="p-3 text">
                              <h2>
                                <a href="#">
                                  Save the poor children from hunger
                                </a>
                              </h2>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia
                              </p>
                              <div className="mb-4 goal">
                                <p>
                                  <span>$3,800</span> to go
                                </p>
                                <div
                                  className="progress"
                                  style={{ height: 20 }}
                                >
                                  <div
                                    className="progress-bar progress-bar-striped"
                                    style={{ width: "75%", height: 20 }}
                                  >
                                    75%
                                  </div>
                                </div>
                              </div>
                              <p>
                                <Link
                                  to="/causedetails"
                                  className="btn btn-light w-100"
                                >
                                  Donate Now
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="text-center causes causes-2 ftco-animate">
                            <a
                              href="#"
                              className="img w-100"
                              style={{ backgroundImage: `url(  ${bg2})` }}
                            />
                            <div className="p-3 text">
                              <h2>
                                <a href="#">
                                  Save the poor children from hunger
                                </a>
                              </h2>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia
                              </p>
                              <div className="mb-4 goal">
                                <p>
                                  <span>$3,800</span> to go
                                </p>
                                <div
                                  className="progress"
                                  style={{ height: 20 }}
                                >
                                  <div
                                    className="progress-bar progress-bar-striped"
                                    style={{ width: "70%", height: 20 }}
                                  >
                                    70%
                                  </div>
                                </div>
                              </div>
                              <p>
                                <Link
                                  to="/causedetails"
                                  className="btn btn-light w-100"
                                >
                                  Donate Now
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="text-center causes causes-2 ftco-animate">
                            <a
                              href="#"
                              className="img w-100"
                              style={{ backgroundImage: `url(  ${bg2})` }}
                            />
                            <div className="p-3 text">
                              <h2>
                                <a href="#">
                                  Save the poor children from hunger
                                </a>
                              </h2>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia
                              </p>
                              <div className="mb-4 goal">
                                <p>
                                  <span>$3,800</span> to go
                                </p>
                                <div
                                  className="progress"
                                  style={{ height: 20 }}
                                >
                                  <div
                                    className="progress-bar progress-bar-striped"
                                    style={{ width: "82%", height: 20 }}
                                  >
                                    82%
                                  </div>
                                </div>
                              </div>
                              <p>
                                <Link
                                  to="/causedetails"
                                  className="btn btn-light w-100"
                                >
                                  Donate Now
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="text-center causes causes-2 ftco-animate">
                            <a
                              href="#"
                              className="img w-100"
                              style={{ backgroundImage: `url(  ${bg2})` }}
                            />
                            <div className="p-3 text">
                              <h2>
                                <a href="#">
                                  Save the poor children from hunger
                                </a>
                              </h2>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia
                              </p>
                              <div className="mb-4 goal">
                                <p>
                                  <span>$3,800</span> to go
                                </p>
                                <div
                                  className="progress"
                                  style={{ height: 20 }}
                                >
                                  <div
                                    className="progress-bar progress-bar-striped"
                                    style={{ width: "95%", height: 20 }}
                                  >
                                    95%
                                  </div>
                                </div>
                              </div>
                              <p>
                                <Link
                                  to="/causedetails"
                                  className="btn btn-light w-100"
                                >
                                  Donate Now
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                          <div className="text-center causes causes-2 ftco-animate">
                            <a
                              href="#"
                              className="img w-100"
                              style={{ backgroundImage: `url(  ${bg2})` }}
                            />
                            <div className="p-3 text">
                              <h2>
                                <a href="#">
                                  Save the poor children from hunger
                                </a>
                              </h2>
                              <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia
                              </p>
                              <div className="mb-4 goal">
                                <p>
                                  <span>$3,800</span> to go
                                </p>
                                <div
                                  className="progress"
                                  style={{ height: 20 }}
                                >
                                  <div
                                    className="progress-bar progress-bar-striped"
                                    style={{ width: "75%", height: 20 }}
                                  >
                                    75%
                                  </div>
                                </div>
                              </div>
                              <p>
                                <Link
                                  to="/causedetails"
                                  className="btn btn-light w-100"
                                >
                                  Donate Now
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnerDetailPage;
