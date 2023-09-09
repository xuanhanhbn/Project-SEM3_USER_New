import "./landing-page.css";
import backgroundSideLarge from "assets/images/home/slide-background1-large.png";
import background1 from "assets/images/carousel/bg_1.jpg";
import background3 from "assets/images/carousel/bg_3.jpg";
import background2 from "assets/images/carousel/bg_2.jpg";
import volunteer1 from "assets/images/volunteer/services-1.jpg";
import volunteer2 from "assets/images/volunteer/services-2.jpg";
import volunteer3 from "assets/images/volunteer/services-3.jpg";
import volunteer4 from "assets/images/volunteer/services-4.jpg";
import { Carousel, Form, Input, InputNumber } from "antd";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormControl from "@mui/material/FormControl";
import { grey } from "@mui/material/colors";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SavingsIcon from "@mui/icons-material/Savings";
import BalanceIcon from "@mui/icons-material/Balance";

import {
  DataRequestInput,
  inputHomeDonate,
  inputVolunteerRegistration,
  listCauses,
  radioPayload,
  typeInputDonate,
  validationSchema,
} from "./contants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
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
      selectCauses: "",
      amount: "",
      payload: "",
      phone: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  // render input
  const renderInput = (item: typeInputDonate) => {
    if (item.field === "selectCauses") {
      return (
        <Controller
          name="selectCauses"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <div className="">
                <div className="form-group">
                  <label htmlFor="name">Select Causes</label>
                  <div className="form-field">
                    <div className="select-wrap">
                      <select
                        aria-label="Causes"
                        name={item.field}
                        onChange={onChange}
                        value={value}
                        className="form-control"
                      >
                        {listCauses.map((list) => {
                          return (
                            <option key={list.field} value={list.field}>
                              {list.value}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    {errors.selectCauses && (
                      <p
                        style={{ color: " #FFCC47" }}
                        className="text-sm text-red-600"
                      >
                        {errors.selectCauses.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          }}
        />
      );
    }
    if (
      item.field === "fullName" ||
      item.field === "email" ||
      item.field === "phone"
    ) {
      return (
        <>
          <Controller
            name={item.field}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="">
                <div className="form-group">
                  <label htmlFor="name">{item.placeHolder}</label>
                  <div className="input-wrap">
                    <input {...field} type="text" className="form-control" />
                  </div>
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

    if (item.field === "amount") {
      return (
        <>
          <Controller
            name={item.field}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="">
                <div className="form-group">
                  <label htmlFor="name">{item.placeHolder}</label>

                  <div className="input-wrap">
                    <InputNumber
                      {...field}
                      className="form-control"
                      formatter={(value) =>
                        `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }
                    />
                  </div>
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
      {/* carousel */}
      <section className="hero-wrap js-fullheight">
        <div
          style={{ display: "block" }}
          className="home-slider js-fullheight owl-carousel"
        >
          <Carousel effect="fade" autoplay>
            <div>
              <div
                className="slider-item js-fullheight"
                style={{
                  backgroundImage: `url(  ${background1})`,
                }}
              >
                <div className="overlay-1"></div>
                <div className="overlay-2"></div>
                <div className="overlay-3"></div>
                <div className="overlay-4"></div>
                <div className="container">
                  <div className="row no-gutters slider-text js-fullheight align-items-center">
                    <div className="col-md-10 col-lg-7 ">
                      <div className="text w-100">
                        <h2>Help the poor in need</h2>
                        <h1 className="mb-3">
                          Lend the helping hand get involved
                        </h1>
                        <div className="d-flex meta">
                          <div className="">
                            <p className="mb-0">
                              <Link
                                to="/program"
                                className="px-2 py-3 btn btn-secondary px-md-4"
                              >
                                Become a volunteer
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

            <div>
              <div
                className="slider-item js-fullheight"
                style={{
                  backgroundImage: `url(  ${background2})`,
                  display: "flex",
                }}
              >
                <div className="overlay-1"></div>
                <div className="overlay-2"></div>
                <div className="overlay-3"></div>
                <div className="overlay-4"></div>
                <div className="container">
                  <div className="row no-gutters slider-text js-fullheight align-items-center">
                    <div className="col-md-10 col-lg-7 ">
                      <div className="text w-100">
                        <h2>Raising Hope</h2>
                        <h1 className="mb-3">
                          Discover Non-Profit Charity Platform
                        </h1>
                        <div className="d-flex meta">
                          <div className="">
                            <p className="mb-0">
                              <Link
                                to="/program"
                                className="px-2 py-3 btn btn-secondary px-md-4"
                              >
                                Become a volunteer
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

            <div>
              <div
                className="slider-item js-fullheight"
                style={{
                  backgroundImage: `url(  ${background3})`,
                }}
              >
                <div className="overlay-1"></div>
                <div className="overlay-2"></div>
                <div className="overlay-3"></div>
                <div className="overlay-4"></div>
                <div className="container">
                  <div className="row no-gutters slider-text js-fullheight align-items-center">
                    <div className="col-md-10 col-lg-7">
                      <div className="text w-100">
                        <h2>Raising Hope</h2>
                        <h1 className="mb-3">
                          Giving Hope to the Homeless People
                        </h1>
                        <div className="d-flex meta">
                          <div className="">
                            <p className="mb-0">
                              <Link
                                to="/program"
                                className="px-2 py-3 btn btn-secondary px-md-4"
                              >
                                Become a volunteer
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
          </Carousel>
        </div>
      </section>

      {/* donate form */}
      <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="py-5 col-md-12 wrap-about">
              <div className="heading-section pr-md-5 pt-md-5">
                <span className="subheading">Welcome to unicare</span>
                <h2 className="mb-4">We are here to help everyone in need</h2>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </div>
              <div className="row my-md-5 ">
                <div className="col-md-6 d-flex counter-wrap">
                  <div className="block-18 d-flex justify-content-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <VolunteerActivismIcon sx={{ fontSize: 30 }} />
                    </div>
                    <div className="mx-4">
                      <div className="text">
                        <strong className="number" data-number="50">
                          1,527
                        </strong>
                      </div>
                      <div className="text">
                        <span>Volunteers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex counter-wrap">
                  <div className="block-18 d-flex justify-content-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <AccountBalanceIcon sx={{ fontSize: 30 }} />
                    </div>
                    <div className="mx-4">
                      <div className="text">
                        <strong className="number" data-number="24400">
                          327
                        </strong>
                      </div>
                      <div className="text">
                        <span>Trusted Funds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* volunteer */}
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="services">
                <div className="text-center text bg-secondary">
                  <h3>
                    Become a <br />
                    Volunteer
                  </h3>
                  <p>
                    But nothing the copy said could convince her and so it
                    didn’t take long until a few
                  </p>
                </div>
                <div
                  className="border-2 img"
                  style={{
                    backgroundImage: `url(  ${volunteer1})`,
                  }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <Diversity1Icon sx={{ fontSize: 50 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="services">
                <div className="text-center text bg-tertiary">
                  <h3>
                    Quick <br />
                    Fundraising
                  </h3>
                  <p>
                    But nothing the copy said could convince her and so it
                    didn’t take long until a few
                  </p>
                </div>
                <div
                  className="img border-3"
                  style={{
                    backgroundImage: `url(  ${volunteer2})`,
                  }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <FavoriteIcon sx={{ fontSize: 50 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="services">
                <div className="text-center text bg-primary">
                  <h3>
                    Start <br />
                    Donating
                  </h3>
                  <p>
                    But nothing the copy said could convince her and so it
                    didn’t take long until a few
                  </p>
                </div>
                <div
                  className="img border-1"
                  style={{
                    backgroundImage: `url(  ${volunteer3})`,
                  }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <SavingsIcon sx={{ fontSize: 50 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="services">
                <div className="text-center text bg-quarternary">
                  <h3>
                    Get <br />
                    Involved
                  </h3>
                  <p>
                    But nothing the copy said could convince her and so it
                    didn’t take long until a few
                  </p>
                </div>
                <div
                  className="border-4 img"
                  style={{
                    backgroundImage: `url(  ${volunteer4})`,
                  }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <BalanceIcon sx={{ fontSize: 50 }} />
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

export default LandingPage;
