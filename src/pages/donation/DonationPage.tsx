import React, { useState } from "react";

import bg from "assets/images/gallery/page-title-bg-1.jpg";
import about from "assets/images/background/about-3.jpg";

import { InputNumber, Space } from "antd";

import {
  DataRequestInput,
  inputHomeDonate,
  typeInputDonate,
  validationSchema,
} from "./contants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

function DonationPage() {
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
      reason: "",
      amount: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  // render input
  const renderInput = (item: typeInputDonate) => {
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
                      autoFocus
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
                  Donation <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Donation</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div
                  className="mb-4"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div style={{ maxWidth: "500px", textAlign: "center" }}>
                    <h4
                      style={{
                        fontSize: 46,
                        fontWeight: 700,
                        color: "black",
                        fontFamily: '"Poppins",sans-serif',
                      }}
                    >
                      Make a donation to help us
                    </h4>
                  </div>
                </div>

                <div className="mt-4 row no-gutters">
                  <div className="col-md-7">
                    <div className="p-4 contact-wrap w-100 p-md-5">
                      <h3 className="mb-4">Donator Details</h3>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="appointment"
                      >
                        <div className="row">
                          {inputHomeDonate.map((input) => (
                            <div key={input.field}>{renderInput(input)}</div>
                          ))}

                          <div className="">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Donate Now"
                                className="px-4 py-3 btn btn-secondary"
                              />
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
          </div>
        </div>
      </section>
    </>
  );
}

export default DonationPage;
