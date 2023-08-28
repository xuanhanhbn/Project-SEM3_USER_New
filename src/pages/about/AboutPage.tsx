import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import bg2 from "assets/images/carousel/bg_2.jpg";
import bg3 from "assets/images/carousel/bg_3.jpg";
import { Carousel } from "antd";
import person1 from "assets/images/business/person_1.jpg";
import person2 from "assets/images/business/person_2.jpg";
import person3 from "assets/images/business/person_3.jpg";
import person4 from "assets/images/business/person_4.jpg";
import { useAppDispatch } from "store/hook";
import { aboutActions, selectCityList } from "./aboutSlice";
import { useSelector } from "react-redux";

const AboutPage = () => {
  const dispatch = useAppDispatch();
  const globalData = useSelector(selectCityList);
  const dataAbout = globalData?.list;
  console.log("about", dataAbout);

  useEffect(() => {
    dispatch(aboutActions.getListAbout());
  }, []);

  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: `url(  ${bg2})`,
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
                  About us <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 d-flex order-md-last">
              <div
                className="mb-4 img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-sm-0"
                style={{
                  backgroundImage: `url(  ${bg3})`,
                  marginTop: 30,
                }}
              ></div>
            </div>
            <div className="col-md-6 pr-md-5 py-md-5">
              <div className="mb-4 heading-section pt-md-5">
                <span className="subheading">About us</span>
                <h2 className="mb-2">Give a helping hand to a needy people</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <p>
                  <a href="#" className="btn btn-secondary">
                    Become a Volunteer
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="pb-5 row justify-content-center">
            <div className="text-center col-md-7 heading-section ">
              <span className="subheading">Welcome to Unicare</span>
              <h2>We Believe that We Can Save More Lifes with You</h2>
            </div>
          </div>
          <div className="row">
            <div className="text-center col-md-3 services-2 w-100">
              <div className="icon icon-1 d-flex align-items-center justify-content-center">
                <span className="flaticon-water-drop"></span>
              </div>
              <div className="text">
                <h4>Water</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </div>
            </div>
            <div className="text-center col-md-3 services-2 w-100">
              <div className="icon icon-2 d-flex align-items-center justify-content-center">
                <span className="flaticon-stethoscope"></span>
              </div>
              <div className="text">
                <h4>Medical</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </div>
            </div>
            <div className="text-center col-md-3 services-2 w-100">
              <div className="icon icon-3 d-flex align-items-center justify-content-center">
                <span className="flaticon-bread"></span>
              </div>
              <div className="text">
                <h4>Food</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </div>
            </div>
            <div className="text-center col-md-3 services-2 w-100">
              <div className="icon icon-4 d-flex align-items-center justify-content-center">
                <span className="flaticon-university"></span>
              </div>
              <div className="text">
                <h4>Education</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <a href="#" className="btn btn-white btn-outline-white">
                Donate Now
              </a>
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
              <div className="carousel-testimony owl-carousel">
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

export default AboutPage;
