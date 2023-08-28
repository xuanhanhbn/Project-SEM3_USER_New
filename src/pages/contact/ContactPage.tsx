import React from "react";
import bg2 from "assets/images/carousel/bg_2.jpg";
import about from "assets/images/background/about-3.jpg";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormControl from "@mui/material/FormControl";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import { requestContact } from "./type";
import { useAppDispatch } from "store/hook";
import { contactActions } from "./contactSlice";

import {
  DataRequestInput,
  inputContact,
  typeInputContact,
  validationSchema,
} from "./constants";

function ContactPage() {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DataRequestInput>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      subject: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: requestContact) => {
    dispatch(contactActions.onContact(data));
  };

  // render input
  const renderInput = (item: typeInputContact) => {
    if (
      item.field === "subject" ||
      item.field === "message" ||
      item.field === "fullName" ||
      item.field === "email"
    ) {
      return (
        <>
          <Controller
            name={item.field}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="col-md-12">
                <div className="form-group">
                  <label className="label">{item.placeHolder}</label>
                  <input {...field} type="text" className="form-control" />
                  {errors &&
                    errors[item.field as keyof DataRequestInput] &&
                    errors[item.field as keyof DataRequestInput]?.message && (
                      <p
                        style={{ color: " #FFCC47" }}
                        className="text-sm text-red-600"
                      >
                        {errors[item.field as keyof DataRequestInput]?.message}
                      </p>
                    )}
                </div>
              </div>
            )}
          />
        </>
      );
    }
  };

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
                </span>{" "}
                <span>
                  Contact us <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Contact us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="mb-5 row">
                  <div className="col-md-3">
                    <div className="text-center dbox w-100">
                      <div className="icon bg-primary d-flex align-items-center justify-content-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="fa fa-map-marker"
                          fill="#ffffff"
                          height="4rem"
                        >
                          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />{" "}
                        </svg>
                      </div>
                      <div className="text">
                        <p>
                          <span>Address:</span> 198 West 21th Street, Suite 721
                          New York NY 10016
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center dbox w-100">
                      <div className="icon bg-secondary d-flex align-items-center justify-content-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="fa fa-phone"
                          fill="#ffffff"
                          height="4rem"
                        >
                          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />{" "}
                        </svg>
                      </div>
                      <div className="text">
                        <p>
                          <span>Phone:</span>{" "}
                          <a href="tel://1234567920">+ 1235 2355 98</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center dbox w-100">
                      <div className="icon bg-tertiary d-flex align-items-center justify-content-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="fa fa-paper-plane"
                          fill="#ffffff"
                          height="4rem"
                        >
                          <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />{" "}
                        </svg>
                      </div>
                      <div className="text">
                        <p>
                          <span>Email:</span>{" "}
                          <a href="mailto:info@yoursite.com">
                            giveaid@website.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center dbox w-100">
                      <div className="icon bg-quarternary d-flex align-items-center justify-content-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="fa fa-globe"
                          fill="#ffffff"
                          height="4rem"
                        >
                          <path d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9h2.3c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z" />
                        </svg>
                      </div>
                      <div className="text">
                        <p>
                          <span>Website</span> <a href="#">yoursite.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-md-7">
                    <div className="p-4 contact-wrap w-100 p-md-5">
                      <h3 className="mb-4">Contact Us</h3>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          {inputContact.map((input) => (
                            <div key={input.field}>{renderInput(input)}</div>
                          ))}

                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
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
            {/* map */}
            <div className="col-md-12">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096949075225!2d105.77970890950155!3d21.028806487698702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32b842a37%3A0xe91a56573e7f9a11!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1692361220398!5m2!1svi!2s"
                  width="800"
                  height="600"
                  style={{ border: 0, width: "100%", maxHeight: "500px" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
