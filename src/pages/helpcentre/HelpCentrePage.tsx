import React from "react";
import { Box, Container } from "@mui/material";
import bg from "assets/images/gallery/page-title-bg-1.jpg";
import about from "assets/images/background/about-3.jpg";
import "./css.css";
import { inputContact } from "./contants";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormControl from "@mui/material/FormControl";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

const HelpCentrePage = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
                  Help centre <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Help centre</h1>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section"
        style={{ paddingBottom: 20, paddingTop: 120 }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-7">
                    <div className="p-4 contact-wrap w-100 p-md-5">
                      <h3
                        className="mb-4"
                        style={{ color: "black", fontWeight: 700 }}
                      >
                        What Is Give-AID ?
                      </h3>
                      <p style={{ color: "white" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                      <>
                        <details>
                          <summary>FAQ 1</summary>
                          <div className="faq__content">
                            <p>Answer 1</p>
                          </div>
                        </details>
                        <details>
                          <summary>FAQ 2</summary>
                          <div className="faq__content">
                            <p>Answer 2</p>
                          </div>
                        </details>
                        <details>
                          <summary>FAQ 3</summary>
                          <div className="faq__content">
                            <p>Answer 3</p>
                          </div>
                        </details>
                      </>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div
                      className="p-5 info-wrap w-100 img"
                      style={{
                        backgroundImage: `url(  ${about})`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section"
        style={{
          paddingTop: 20,
          backgroundColor: "#faf8f2",
          paddingBottom: 120,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div
                      className="p-5 info-wrap w-100 img"
                      style={{
                        backgroundImage: `url(  ${about})`,
                      }}
                    ></div>
                  </div>
                  <div className="col-md-7">
                    <div className="p-4 contact-wrap w-100 p-md-5">
                      <h3
                        className="mb-4"
                        style={{ color: "black", fontWeight: 700 }}
                      >
                        My donation secure?
                      </h3>
                      <p style={{ color: "white" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                      <>
                        <details>
                          <summary>FAQ 1</summary>
                          <div className="faq__content">
                            <p>Answer 1</p>
                          </div>
                        </details>
                        <details>
                          <summary>FAQ 2</summary>
                          <div className="faq__content">
                            <p>Answer 2</p>
                          </div>
                        </details>
                        <details>
                          <summary>FAQ 3</summary>
                          <div className="faq__content">
                            <p>Answer 3</p>
                          </div>
                        </details>
                      </>
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
};

export default HelpCentrePage;
