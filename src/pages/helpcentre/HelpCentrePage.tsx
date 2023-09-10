import React from "react";
import { Box, Container } from "@mui/material";
import bg from "assets/images/gallery/page-title-bg-1.jpg";
import about from "assets/images/background/about-3.jpg";
import "./css.css";
import { inputContact } from "./contants";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormControl from "@mui/material/FormControl";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

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
                  <Link to="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </Link>
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
                        We’re an international movement supported by more than 7
                        million private donors worldwide. Get involved to help
                        us deliver medical humanitarian aid where it’s needed
                        most.
                      </p>
                      <>
                        <details>
                          <summary>Who can submit a complaint?</summary>
                          <div className="faq__content">
                            <p>
                              Any of the following that claim to be victims of
                              human rights violations or that have direct,
                              reliable knowledge of such violations:
                            </p>
                            <ul style={{ listStyleType: "disc" }}>
                              <li>Individuals</li>
                              <li>Groups of individuals or communities</li>
                              <li>Non-governmental organizations</li>
                            </ul>
                          </div>
                        </details>
                        <details>
                          <summary>
                            What is the eligibility criteria to submit a
                            complaint?
                          </summary>
                          <div className="faq__content">
                            <p>
                              There are various{" "}
                              <strong>eligibility criteria</strong>. For
                              example, you must have exhausted all domestic
                              remedies.
                            </p>
                          </div>
                        </details>
                        <details>
                          <summary>
                            Who can you make a complaint against?
                          </summary>
                          <div className="faq__content">
                            <p>
                              Any <strong>members, partners of Give-AID</strong>
                            </p>
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
                        You will receive a charitable tax receipt for income tax
                        purposes. For donations made by check or through the
                        mail, you will receive a paper donation receipt. For
                        donations made online, your receipt will be sent by
                        email.
                      </p>
                      <>
                        <details>
                          <summary>
                            How can I get a copy of a donation receipt?
                          </summary>
                          <div className="faq__content">
                            <p>
                              You may also email donations@giveaid.org with your
                              request. Please include your full name and
                              address, which are required to locate your
                              donation record, as well as the mail or email
                              address where you prefer to receive your receipt.
                            </p>
                          </div>
                        </details>
                        <details>
                          <summary>
                            How can I change or cancel my monthly donation?
                          </summary>
                          <div className="faq__content">
                            <p>
                              To cancel or change your monthly donation, please
                              update your donation preferences through the
                              Service Center. In order to make a change, we will
                              need the new card, with expiration and security
                              code. You can also call Direct Relief at
                              805-964-4767 and someone from the team will be
                              happy to assist you.
                            </p>
                          </div>
                        </details>
                        <details>
                          <summary>
                            I would like to donate to Direct Relief. Where
                            should I send my donation and do you accept cash,
                            credit, and online gifts?
                          </summary>
                          <div className="faq__content">
                            <p>
                              Online donations are accepted on Give-AID secure
                              website. Simply click here:
                              <strong>Donate now</strong>.
                            </p>
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
