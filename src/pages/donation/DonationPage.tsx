import React, { useState } from "react";

import bg from "assets/images/gallery/page-title-bg-1.jpg";
import about from "assets/images/background/about-3.jpg";

import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { InputNumber, Space } from "antd";

import FormControl from "@mui/material/FormControl";

import {
  DataRequestInput,
  inputHomeDonate,
  listCauses,
  radioPayload,
  typeInputDonate,
  validationSchema,
} from "./contants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { log } from "console";
import { number } from "yup";

import { useMutation } from "@tanstack/react-query";
import { notify } from "utils/common";
import { onPaymentApi } from "./api";

function DonationPage() {
  const [showPayButton, setShowPayButton] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [amount, setAmount] = useState(0);
  const [descriptions, setDescriptions] = useState("");
  const [value, setValue] = useState(0);

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
      payment: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  // render input
  // const renderInput = (item: typeInputDonate) => {
  //   if (item.field === "selectCauses") {
  //     return (
  //       <Controller
  //         name="selectCauses"
  //         control={control}
  //         render={({ field: { onChange, value } }) => {
  //           return (
  //             <div className="">
  //               <div className="form-group">
  //                 <label htmlFor="name">Select Causes</label>
  //                 <div className="form-field">
  //                   <div className="select-wrap">
  //                     <select
  //                       name={item.field}
  //                       onChange={onChange}
  //                       value={value}
  //                       className="form-control"
  //                     >
  //                       {listCauses.map((list) => {
  //                         return (
  //                           <option key={list.field} value={list.field}>
  //                             {list.value}
  //                           </option>
  //                         );
  //                       })}
  //                     </select>
  //                   </div>
  //                   {errors.selectCauses && (
  //                     <p
  //                       style={{ color: " #FFCC47" }}
  //                       className="text-sm text-red-600"
  //                     >
  //                       {errors.selectCauses.message}
  //                     </p>
  //                   )}
  //                 </div>
  //               </div>
  //             </div>
  //           );
  //         }}
  //       />
  //     );
  //   }
  //   if (item.field === "fullName" || item.field === "email") {
  //     return (
  //       <>
  //         <Controller
  //           name={item.field}
  //           control={control}
  //           defaultValue=""
  //           render={({ field }) => (
  //             <div className="">
  //               <div className="form-group">
  //                 <label htmlFor="name">{item.placeHolder}</label>

  //                 <div className="input-wrap">
  //                   <input {...field} type="text" className="form-control" />
  //                 </div>
  //                 {errors &&
  //                   errors[item.field as keyof DataRequestInput] &&
  //                   errors[item.field as keyof DataRequestInput]?.message && (
  //                     <p
  //                       style={{ color: " #FFCC47" }}
  //                       className="text-sm text-red-600"
  //                     >
  //                       {errors[item.field as keyof DataRequestInput]?.message}
  //                     </p>
  //                   )}
  //               </div>
  //             </div>
  //           )}
  //         />
  //       </>
  //     );
  //   }

  //   if (item.field === "amount") {
  //     return (
  //       <>
  //         <Controller
  //           name={item.field}
  //           control={control}
  //           defaultValue=""
  //           render={({ field }) => (
  //             <div className="">
  //               <div className="form-group">
  //                 <label htmlFor="name">{item.placeHolder}</label>

  //                 <div className="input-wrap">
  //                   <InputNumber
  //                     {...field}
  //                     className="form-control"
  //                     formatter={(value) =>
  //                       `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  //                     }
  //                   />
  //                 </div>
  //                 {errors &&
  //                   errors[item.field as keyof DataRequestInput] &&
  //                   errors[item.field as keyof DataRequestInput]?.message && (
  //                     <p
  //                       style={{ color: " #FFCC47" }}
  //                       className="text-sm text-red-600"
  //                     >
  //                       {errors[item.field as keyof DataRequestInput]?.message}
  //                     </p>
  //                   )}
  //               </div>
  //             </div>
  //           )}
  //         />
  //       </>
  //     );
  //   }
  // };

  // const createOrder = (data: any, actions: any) => {
  //   return actions.order
  //     .create({
  //       purchase_units: [
  //         {
  //           descriptions: descriptions,
  //           amount: {
  //             currency_code: "USD",
  //             value: amount,
  //           },
  //         },
  //       ],
  //       application_context: {
  //         shipping_preference: "NO_SHIPPING",
  //       },
  //     })
  //     .then((orderId: any) => {
  //       setOrderId(orderId);
  //       return orderId;
  //     });
  // };

  // const onApprove = (data: any, actions: any) => {
  //   return actions.order.capture().then(function (details: any) {
  //     const { payer } = details;
  //     setSuccess(true);
  //   });
  // };

  const createOrder = () => {
    return fetch("https://sem3eproj.azurewebsites.net/api/Payment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product ids and quantities
      body: JSON.stringify({
        reason: descriptions,
        amount: amount,
        programId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };

  // const onApprove = (data: any) => {
  //   return fetch("https://sem3eproj.azurewebsites.net/api/Payment/create", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       orderID: data.orderID,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((orderData) => {
  //       const name = orderData.payer.name.given_name;
  //       alert(`Transaction completed by ${name}`);
  //     });
  // };

  const onError = () => {
    setErrorMessage("errorrrrrrrrrrrrrrrrr");
  };

  const handleGetVal = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowPayButton(true);

    setAmount(parseFloat(event.target.value));

    setValue(amount);

    console.log("value", value);
  };

  const onChange = () => {
    setShowPayButton(true);
  };

  const getValProgram = (event: any) => {
    setDescriptions(event.target.value);
  };

  // Call api
  const { mutate: onCreateDonation, isLoading } = useMutation(onPaymentApi, {
    onSuccess: (data) => {
      // if (data && data.token) {
      //   notify("Login Success", "success");
      // } else {
      //   notify("An error occurred, please try again.", "error");
      // }
      console.log(data);
    },
    onError: () => {
      notify("An error occurred, please try again.", "error");
    },
  });

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
                          {/* {inputHomeDonate.map((input) => (
                            <div key={input.field}>{renderInput(input)}</div>
                          ))} */}

                          {/* <div className="">
                            <div className="form-group">
                              <label htmlFor="name">Payment Method</label>
                              <div className="d-lg-flex">
                                <Controller
                                  control={control}
                                  render={({ field: { onChange, value } }) => (
                                    <>
                                      <FormControl>
                                        <RadioGroup
                                          onChange={onChange}
                                          value={value}
                                          row
                                          aria-label="gender"
                                          name="account-settings-info-radio"
                                        >
                                          {radioPayload.map((radio) => {
                                            return (
                                              <FormControlLabel
                                                key={radio.field}
                                                value={radio.field}
                                                label={radio.value}
                                                control={<Radio />}
                                              />
                                            );
                                          })}
                                        </RadioGroup>
                                      </FormControl>
                                    </>
                                  )}
                                  name="payment"
                                />
                              </div>
                              {errors.payment && (
                                <p
                                  style={{ color: " #FFCC47" }}
                                  className="text-sm text-red-600"
                                >
                                  {errors.payment.message}
                                </p>
                              )}
                            </div>
                          </div> */}

                          <PayPalScriptProvider
                            options={{
                              clientId:
                                "AWcaqlOmS7EMltdAdtP4P0G6gIzEolFVLF5uPD9a7M5a-JTT8ivWxF_aw2DcvZ8VBUP36Zn8OVzzSeOJ",
                            }}
                          >
                            <div className="">
                              <div className="form-group">
                                <label
                                  style={{ color: "white" }}
                                  htmlFor="name"
                                >
                                  Name
                                </label>

                                <div className="input-wrap">
                                  <input
                                    aria-label="name"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="">
                              <div className="form-group">
                                <label
                                  style={{ color: "white" }}
                                  htmlFor="email"
                                >
                                  Email
                                </label>

                                <div className="input-wrap">
                                  <input
                                    aria-label="email"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="">
                              <div className="form-group">
                                <label htmlFor="name">Program</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <select
                                      aria-label="descriptions"
                                      name="descriptions"
                                      onChange={getValProgram}
                                      value={descriptions}
                                      className="form-control"
                                    >
                                      {listCauses.map((list) => {
                                        return (
                                          <option
                                            key={list.field}
                                            value={list.field}
                                          >
                                            {list.value}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="">
                              <div className="form-group">
                                <label
                                  style={{ color: "white" }}
                                  htmlFor="name"
                                >
                                  Amount
                                </label>

                                <div className="input-wrap">
                                  <input
                                    aria-label="amount"
                                    type="text"
                                    className="form-control"
                                    // onChange={onChange}
                                    onChange={handleGetVal}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="">
                              <div className="form-group">
                                <div style={{ marginTop: 20 }}>
                                  {showPayButton ? (
                                    <PayPalButtons
                                      createOrder={createOrder}
                                      // onApprove={onApprove}
                                      // onClick={}
                                    />
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </PayPalScriptProvider>

                          <div className="">
                            <div className="form-group">
                              {/* <input
                                type="submit"
                                value="Donate Now"
                                className="px-4 py-3 btn btn-secondary"
                              /> */}
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
