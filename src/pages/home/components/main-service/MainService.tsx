import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import causes1 from "assets/images/causes/causes-1.jpg";
import causes2 from "assets/images/causes/causes-2.jpg";
import causes3 from "assets/images/causes/causes-3.jpg";
import causes4 from "assets/images/causes/causes-4.jpg";
import person1 from "assets/images/business/person_1.jpg";
import person2 from "assets/images/business/person_2.jpg";
import person3 from "assets/images/business/person_3.jpg";
import person4 from "assets/images/business/person_4.jpg";
import image1 from "assets/images/outblog/image_1.jpg";
import image2 from "assets/images/outblog/image_2.jpg";
import image3 from "assets/images/outblog/image_3.jpg";
import image4 from "assets/images/outblog/image_4.jpg";
import image5 from "assets/images/outblog/image_5.jpg";
import image6 from "assets/images/outblog/image_6.jpg";
import team1 from "assets/images/team/team-1.jpg";
import team2 from "assets/images/team/team-2.jpg";
import team3 from "assets/images/team/team-3.jpg";
import team4 from "assets/images/team/team-4.jpg";
import team5 from "assets/images/team/team-5.jpg";
import team6 from "assets/images/team/team-6.jpg";
import team7 from "assets/images/team/team-7.jpg";
import team8 from "assets/images/team/team-8.jpg";
import team9 from "assets/images/team/team-9.jpg";
import MultiCarousel from "react-multi-carousel";
import { Link } from "react-router-dom";

import { Carousel } from "antd";

const MainService = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      src: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      src: "https://picsum.photos/200/300",
    },
  ]);

  return (
    <>
      {/* hoat dong  */}
      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="pb-5 mb-3 row justify-content-center">
            <div className="text-center col-md-7 heading-section ">
              <span className="subheading">Our Causes</span>
              <h2>Donate to charity causes around the world</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="text-center causes causes-2 ">
                <a
                  href=""
                  className="img w-100"
                  style={{
                    backgroundImage: `url(  ${causes1})`,
                  }}
                ></a>
                <div className="p-3 text">
                  <h2>
                    <a href="">Save the poor children from hunger</a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <div className="mb-4 goal">
                    <p>
                      <span>$3,800</span> to go
                    </p>
                    <div className="progress" style={{ height: "20px" }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: "70%", height: "20px" }}
                      >
                        70%
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link className="btn btn-light w-100" to="/causedetails">
                      Donate Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center causes causes-2 ">
                <a
                  href=""
                  className="img w-100"
                  style={{
                    backgroundImage: `url(  ${causes2})`,
                  }}
                ></a>
                <div className="p-3 text">
                  <h2>
                    <a href="">Save the poor children from hunger</a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <div className="mb-4 goal">
                    <p>
                      <span>$3,800</span> to go
                    </p>
                    <div className="progress" style={{ height: "20px" }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: "82%", height: "20px" }}
                      >
                        82%
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link className="btn btn-light w-100" to="/causedetails">
                      Donate Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center causes causes-2 ">
                <a
                  href=""
                  className="img w-100"
                  style={{
                    backgroundImage: `url(  ${causes3})`,
                  }}
                ></a>
                <div className="p-3 text">
                  <h2>
                    <a href="">Save the poor children from hunger</a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <div className="mb-4 goal">
                    <p>
                      <span>$3,800</span> to go
                    </p>
                    <div className="progress" style={{ height: "20px" }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: "95%", height: "20px" }}
                      >
                        95%
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link className="btn btn-light w-100" to="/causedetails">
                      Donate Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center causes causes-2 ">
                <a
                  href=""
                  className="img w-100"
                  style={{
                    backgroundImage: `url(  ${causes4})`,
                  }}
                ></a>
                <div className="p-3 text">
                  <h2>
                    <a href="">Save the poor children from hunger</a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <div className="mb-4 goal">
                    <p>
                      <span>$3,800</span> to go
                    </p>
                    <div className="progress" style={{ height: "20px" }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: "75%", height: "20px" }}
                      >
                        75%
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link className="btn btn-light w-100" to="/causedetails">
                      Donate Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* con so thong ke */}
      <section className="ftco-counter" id="section-counter">
        <div className="container">
          <div className="row">
            <div className="mb-5 text-center col-md-3 mb-md-0 text-md-left">
              <h2
                className="font-weight-bold"
                style={{ color: "#fff", fontSize: "22px" }}
              >
                We're on a mission to help all your problems
              </h2>

              <Link className="btn btn-white btn-outline-white" to="/donation">
                Donate Now
              </Link>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
                  <div className="text-center block-18">
                    <div className="text">
                      <strong className="number" data-number="88984">
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>Donation Campaigns are running</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
                  <div className="text-center block-18">
                    <div className="text">
                      <strong className="number" data-number="65000">
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>Professional and kind volunteers</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
                  <div className="text-center block-18">
                    <div className="text">
                      <strong className="number" data-number="77000">
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>Funds we raised till now on site</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ">
                  <div className="text-center block-18">
                    <div className="text">
                      <strong className="number" data-number="50">
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>Dedicated Donors</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section testimony-section">
        <div className="overlay"></div>
        <div className="container">
          <div className="pb-5 row justify-content-center">
            <div className="text-center col-md-7 heading-section heading-section-white ">
              <span className="subheading">Testimony</span>
              <h2>Happy Clients &amp; Feedbacks</h2>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12">
              <div
                style={{ display: "block" }}
                className="carousel-testimony owl-carousel"
              >
                <Carousel autoplay>
                  <div>
                    <div className="item">
                      <div className="testimony-wrap d-flex">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: `url(  ${person1})`,
                          }}
                        ></div>
                        <div className="pl-4 text">
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left"></i>
                          </span>
                          <p className="rate">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                          </p>
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia
                          </p>
                          <p className="name">Racky Henderson</p>
                          <span className="position">Father</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="item">
                      <div className="testimony-wrap d-flex">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: `url(  ${person2})`,
                          }}
                        ></div>
                        <div className="pl-4 text">
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left"></i>
                          </span>
                          <p className="rate">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                          </p>
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia
                          </p>
                          <p className="name">Henry Dee</p>
                          <span className="position">Businesswoman</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="item">
                      <div className="testimony-wrap d-flex">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: `url(  ${person3})`,
                          }}
                        ></div>
                        <div className="pl-4 text">
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left"></i>
                          </span>
                          <p className="rate">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                          </p>
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia
                          </p>
                          <p className="name">Mark Huff</p>
                          <span className="position">Businesswoman</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="item">
                      <div className="testimony-wrap d-flex">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: `url(  ${person4})`,
                          }}
                        ></div>
                        <div className="pl-4 text">
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left"></i>
                          </span>
                          <p className="rate">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                          </p>
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia
                          </p>
                          <p className="name">Benjie Busk Jr.</p>
                          <span className="position">Businesswoman</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="item">
                      <div className="testimony-wrap d-flex">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: `url(  ${person1})`,
                          }}
                        ></div>
                        <div className="pl-4 text">
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left"></i>
                          </span>
                          <p className="rate">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                          </p>
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia
                          </p>
                          <p className="name">Ken Bosh</p>
                          <span className="position">Businesswoman</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="pb-5 mb-3 row justify-content-center">
            <div className="text-center col-md-7 heading-section ">
              <span className="subheading">Our Blog</span>
              <h2>Latest news from our blog</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-6 col-lg-3 d-flex ">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage: `url(  ${image1})`,
                  }}
                ></a>
                <div className="p-4 text">
                  <div className="mb-2 meta">
                    <div>
                      <a href="#">July 20, 2020</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="fa fa-comment"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">Foods &amp; Water Need in Africa</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <p>
                    <Link className="btn btn-secondary" to="/blogdetails">
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage: `url(  ${image2})`,
                  }}
                ></a>
                <div className="p-4 text">
                  <div className="mb-2 meta">
                    <div>
                      <a href="#">July 20, 2020</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="fa fa-comment"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">Foods &amp; Water Need in Africa</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <p>
                    <Link className="btn btn-secondary" to="/blogdetails">
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage: `url(  ${image3})`,
                  }}
                ></a>
                <div className="p-4 text">
                  <div className="mb-2 meta">
                    <div>
                      <a href="#">July 20, 2020</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="fa fa-comment"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">Foods &amp; Water Need in Africa</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <p>
                    <Link className="btn btn-secondary" to="/blogdetails">
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage: `url(  ${image4})`,
                  }}
                ></a>
                <div className="p-4 text">
                  <div className="mb-2 meta">
                    <div>
                      <a href="#">July 20, 2020</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" className="meta-chat">
                        <span className="fa fa-comment"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">Foods &amp; Water Need in Africa</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                  </p>
                  <p>
                    <Link className="btn btn-secondary" to="/blogdetails">
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt">
        <div className="container">
          <div className="pb-5 mb-3 row justify-content-center">
            <div className="text-center col-md-7 heading-section ">
              <span className="subheading">Volunteer</span>
              <h2>Our Expert Volunteer</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="volunteer">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(  ${team1})`,
                  }}
                ></div>
                <div className="text text-1">
                  <h3>Alex Martin</h3>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="volunteer">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(  ${team2})`,
                  }}
                ></div>
                <div className="text text-2">
                  <h3>Cedrick Brown</h3>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="volunteer">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(  ${team3})`,
                  }}
                ></div>
                <div className="text text-3">
                  <h3>John Wick</h3>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="volunteer">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(  ${team4})`,
                  }}
                ></div>
                <div className="text text-4">
                  <h3>Max Love</h3>
                  <span>Volunteer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-hireme bg-secondary">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-8 col-lg-8 d-flex align-items-center">
              <div className="w-100">
                <h2>Best Way to Make a Difference in the Lives of Others</h2>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 d-flex align-items-center justify-content-end">
              <p className="mb-0">
                <a href="#" className="px-4 py-3 btn btn-primary">
                  Become A Volunteer
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainService;
