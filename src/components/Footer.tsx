import React from "react";
import image1 from "assets/images/outblog/image_1.jpg";
import image2 from "assets/images/outblog/image_2.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="mb-4 col-md-6 col-lg-3 mb-md-0">
              <h2 className="footer-heading">Unicare.</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <ul className="p-0 ftco-footer-social">
                <li>
                  <a data-toggle="tooltip" data-placement="top" title="Twitter">
                    <span className="fa fa-twitter">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                        fill="#18a577"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  >
                    <span className="fa fa-facebook">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                        fill="#18a577"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />{" "}
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    <span className="fa fa-instagram">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        fill="#18a577"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
              <p>
                <Link className="btn btn-quarternary" to="/donation">
                  Donate Now
                </Link>
              </p>
            </div>
            <div className="mb-4 col-md-6 col-lg-3 mb-md-0">
              <h2 className="footer-heading">Latest News</h2>
              <div className="mb-4 block-21 d-flex">
                <a
                  className="mr-4 rounded img"
                  style={{
                    backgroundImage: `url(  ${image1})`,
                  }}
                ></a>
                <div className="text">
                  <h3 className="heading">
                    <a>Even the all-powerful Pointing has no control about</a>
                  </h3>
                  <div className="meta">
                    <div>
                      <p>Jul 20, 2020</p>
                    </div>
                    <div>
                      <p>Admin</p>
                    </div>
                    <div>
                      <p>19</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4 block-21 d-flex">
                <a
                  className="mr-4 rounded img"
                  style={{
                    backgroundImage: `url(  ${image2})`,
                  }}
                ></a>
                <div className="text">
                  <h3 className="heading">
                    <a>Even the all-powerful Pointing has no control about</a>
                  </h3>
                  <div className="meta">
                    <div>
                      <p>Jul 20, 2020</p>
                    </div>
                    <div>
                      <p>Admin</p>
                    </div>
                    <div>
                      <p>19</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 col-md-6 col-lg-3 pl-lg-5 mb-md-0">
              <h2 className="footer-heading">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <Link className="py-2 d-block " to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="py-2 d-block " to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="py-2 d-block " to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link className="py-2 d-block " to="/ourpartner">
                    Our partners
                  </Link>
                </li>
                <li>
                  <Link className="py-2 d-block " to="/helpcentre">
                    Help centre
                  </Link>
                </li>
                <li>
                  <Link className="py-2 d-block " to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="py-2 d-block " to="/donation">
                    Donation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-4 col-md-6 col-lg-3 mb-md-0">
              <h2 className="footer-heading">Have a Questions?</h2>
              <div className="mb-3 block-23">
                <ul>
                  <li>
                    <span className="icon fa fa-map">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                        fill="#ffffff66"
                      >
                        <path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z" />
                      </svg>
                    </span>
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <a>
                      <span className="icon fa fa-phone">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 576 512"
                          fill="#ffffff66"
                        >
                          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />{" "}
                        </svg>
                      </span>
                      <span className="text">+2 392 3929 210</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="icon fa fa-paper-plane">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 576 512"
                          fill="#ffffff66"
                        >
                          <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />{" "}
                        </svg>
                      </span>
                      <span className="text">info@yourdomain.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-5 row">
            <div className="text-center col-md-12">
              <p className="copyright">
                Copyright &copy; All rights reserved | This template is made
                with <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                <a href="" target="_blank">
                  Colorlib.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
