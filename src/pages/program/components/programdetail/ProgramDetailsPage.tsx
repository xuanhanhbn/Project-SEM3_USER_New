import bg from "assets/images/gallery/page-title-bg-1.jpg";
import BlankUser from "assets/images/team/BlankUser2.png";
import React, { useEffect, useState } from "react";
import "./css.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { Image, InputNumber } from "antd";
import moment from "moment";
import RealTime from "components/RealTime";
import { RouteParams } from "pages/program/type";
import { getProgramDetails } from "pages/program/api";
import { ProgramDetail } from "types/global";
import { useMutation } from "@tanstack/react-query";
import { ShareAltOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";

import {
  DataRequestInput,
  inputHomeDonate,
  typeInputDonate,
  validationSchema,
} from "pages/program/components/programdetail/contants";
import { yupResolver } from "@hookform/resolvers/yup";
import { number } from "yup";
import { log } from "console";

function CauseDetailsPage() {
  const { programId } = useParams<RouteParams>();
  const sliceString = programId?.replace("programId=", "");
  const [itemDetails, setItemDetails] = useState<ProgramDetail>();
  const { mutate: getListDetails } = useMutation(getProgramDetails, {
    onSuccess: (data) => {
      setItemDetails(data);
    },
    onError: () => {},
  });

  useEffect(() => {
    if (sliceString) {
      getListDetails({ programId: sliceString });
    }
  }, [sliceString]);

  const handleCalculatorPercent = () => {
    const Percentage = 0;
    if (itemDetails) {
      if (itemDetails?.target > 0 && itemDetails?.totalDonation > 0) {
        const Percentage =
          (itemDetails?.target / itemDetails?.totalDonation) * 100;

        return Percentage;
      }
    }

    return Percentage;
  };

  // list reason
  const reason = () => {
    const listReason = [
      {
        field: "",
        value: "",
      },
    ];

    itemDetails?.donationReason.map((list, index) => {
      return listReason.push({
        field: `${index}`,
        value: `${list}`,
      });
    });

    return listReason;
  };
  const listReason = reason();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DataRequestInput>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      programId: `${sliceString}`,
      reason: "",
      amount: 0,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => console.log("data", data);

  // render input
  const renderInput = (item: typeInputDonate) => {
    if (item.field === "reason") {
      return (
        <Controller
          name="reason"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <div className="">
                <div className="form-group">
                  <label htmlFor="name">reason</label>
                  <div className="form-field">
                    <div className="select-wrap">
                      <select
                        aria-label="reason"
                        name={item.field}
                        onChange={onChange}
                        value={value}
                        className="form-control"
                      >
                        {listReason.map((list) => {
                          return (
                            <option key={list.field} value={list.value}>
                              {list.value}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    {errors.reason && (
                      <p
                        style={{ color: " #FFCC47" }}
                        className="text-sm text-red-600"
                      >
                        {errors.reason.message}
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

    if (item.field === "amount") {
      return (
        <>
          <Controller
            name={item.field}
            control={control}
            defaultValue={0}
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
                  Program Details <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Program Details</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-40 cause-details blog-details pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="cause-details__content">
                <div className="cause-card">
                  <div className="cause-card__inner">
                    <div className="cause-card__image">
                      <Image
                        src={itemDetails?.programThumbnail?.path}
                        alt={`Image_Program_${itemDetails?.name}`}
                      />
                    </div>
                    <div className="cause-card__content">
                      <div className="cause-card__top">
                        <div className="progress" style={{ height: "20px" }}>
                          <div
                            className="progress-bar progress-bar-striped"
                            style={{
                              width: handleCalculatorPercent(),
                              height: "20px",
                            }}
                          >
                            {handleCalculatorPercent()}
                          </div>
                        </div>
                        <div className="justify-content-between cause-card__goals d-flex">
                          <p>
                            <strong>Raised:</strong> $0
                          </p>
                          <p>
                            <strong>Goal:</strong> ${" "}
                            {itemDetails?.target
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{itemDetails?.name}</h3>
                </div>
                <p>{itemDetails?.description}</p>

                <div className="justify-content-between cause-card__bottom d-flex">
                  <p>
                    <Link className="px-4 py-3 btn btn-primary" to="#">
                      Become A Volunteer
                    </Link>
                  </p>
                  <p>
                    <Link
                      style={{ border: "1px solid" }}
                      className="py-3 btn "
                      to="#"
                    >
                      Share <ShareAltOutlined />
                    </Link>
                  </p>
                </div>
              </div>

              <div style={{ backgroundColor: "#198754", borderRadius: "10px" }}>
                <form onSubmit={handleSubmit(onSubmit)} className="appointment">
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

              <div className="result" />
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="cause-details__sidebar">
                <div className="cause-details__organizer">
                  <img
                    src={BlankUser}
                    style={{ width: 60, height: 60 }}
                    alt="Create By"
                  />
                  <p>{`Created: ${moment(itemDetails?.createdAt).format(
                    "YYYY-MM-DD"
                  )}`}</p>
                  <h3>
                    Organizer: <strong>{itemDetails?.createdByName}</strong>
                  </h3>
                </div>
                <div className="cause-details__donations">
                  <h4 className="cause-details__donations-title">Donations</h4>
                  <ul className="list-unstyled cause-details__donations-list">
                    {itemDetails?.enrollments.map((itemEnroll) => (
                      <li key={itemEnroll.enrollmentId}>
                        <Image
                          src={BlankUser}
                          alt="User Donation"
                          width={60}
                          height={60}
                        />
                        <h3>{itemEnroll.createdByName}</h3>
                        <span>{RealTime(itemEnroll.createdAt)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CauseDetailsPage;
