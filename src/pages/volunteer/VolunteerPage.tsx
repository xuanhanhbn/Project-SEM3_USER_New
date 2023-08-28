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

import {
  DataRequestInput,
  inputHomeDonate,
  typeInputDonate,
  validationSchema,
} from "./contants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

function VolunteerPage() {
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
  };

  return (
    <div>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: `url(  ${background1})`,
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
                  Volunteers <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Volunteers</h1>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ marginTop: 100, marginBottom: 100 }}
        className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-md-last d-flex align-items-stretch">
              <div
                style={{ marginTop: 0, borderRadius: 10 }}
                className="donation-wrap"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="appointment">
                  <div className="row">
                    {inputHomeDonate.map((input) => (
                      <div key={input.field}>{renderInput(input)}</div>
                    ))}

                    <div className="">
                      <div style={{ marginTop: 30 }} className="form-group">
                        <input
                          type="submit"
                          value="Become A Volunteer"
                          className="px-4 py-3 btn btn-secondary"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="py-5 col-md-7 wrap-about">
              <div className="heading-section pr-md-5 pt-md-5">
                <span className="subheading">Welcome to Give-AID</span>
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
              <div className="row my-md-5">
                <div className="col-md-6 d-flex counter-wrap">
                  <div className="block-18 d-flex">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-volunteer"></span>
                    </div>
                    <div className="desc">
                      <div className="text">
                        <strong className="number" data-number="50">
                          0
                        </strong>
                      </div>
                      <div className="text">
                        <span>Volunteers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex counter-wrap">
                  <div className="block-18 d-flex">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-piggy-bank"></span>
                    </div>
                    <div className="desc">
                      <div className="text">
                        <strong className="number" data-number="24400">
                          0
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
    </div>
  );
}

export default VolunteerPage;
