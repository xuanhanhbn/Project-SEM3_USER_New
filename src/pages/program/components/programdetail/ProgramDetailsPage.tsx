import bg from "assets/images/gallery/page-title-bg-1.jpg";
import BlankUser from "assets/images/team/BlankUser2.png";
import React, { useEffect, useState } from "react";
import "./css.css";
import { Link, useHistory, useParams, } from "react-router-dom";
import { Image, InputNumber, Modal, Spin } from "antd";
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
import { onPaymentApi, onRegisterVolunteerApi } from "./api";
import { notify } from "utils/common";
import { Button } from "@mui/material";

function CauseDetailsPage() {
  const history = useHistory()

  const { programId } = useParams<RouteParams>();
  const sliceString = programId?.replace("programId=", "");

  const [itemDetails, setItemDetails] = useState<ProgramDetail>();
  const [isOpenModalVolunteer,setIsOpenModalVolunteer] = useState<boolean>(false)
  const [isCheckEnroll,setIsCheckEnroll] = useState<boolean>(false)
  const [urlPayPal, setUrlPayPal] = useState('')

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DataRequestInput>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      reason: "",
      amount: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const { mutate: getListDetails } = useMutation(getProgramDetails, {
    onSuccess: (data) => {
      setItemDetails(data);
    },
    onError: () => {},
  });

  useEffect(() => {
    if(itemDetails) {
      if(itemDetails?.currentUserEnrollment.programId === itemDetails?.programId) {
        return setIsCheckEnroll(true)
      }
      return setIsCheckEnroll(false)

    }
  },[itemDetails])



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
          (itemDetails?.totalDonation / itemDetails?.target) * 100;

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

  const { mutate: onRegisterVolunteer } = useMutation(onRegisterVolunteerApi, {
    onSuccess: (data) => {
      setIsOpenModalVolunteer(false)
      return notify("Register Success ",'success');

    },
    onError: () => {
      return notify("An error occurred, please try again ",'error');
    },
  });

  // Lấy thẻ div trong HTML để chèn thẻ <a> vào

// Gọi API (ví dụ: dùng fetch)
// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => {
//     // Tạo thẻ <a>
//     const link = document.createElement('a');

//     // Đặt thuộc tính href của thẻ <a> thành URL mà bạn muốn chuyển đến
//     link.href = 'https://example.com/newpage';

//     // Đặt nội dung của thẻ <a>
//     link.textContent = 'Chuyển đến trang khác';

//     // Đặt thuộc tính target để mở liên kết trong cửa sổ mới
//     link.target = '_blank';

//     // Chèn thẻ <a> vào thẻ div
//     divContainer.appendChild(link);

//     // Gắn sự kiện click vào thẻ <a> để thực hiện chuyển trang
//     link.addEventListener('click', (event) => {
//       event.preventDefault(); // Ngăn chuyển hướng mặc định của thẻ <a>
//       window.location.href = link.href; // Chuyển đến URL đã đặt
//     });
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


  const { mutate: onDonationMutation,isLoading } = useMutation(onPaymentApi, {
    onSuccess: (data) => {
    const urlPayPal = document.createElement('a');
    // Đặt thuộc tính href của thẻ <a> thành URL mà bạn muốn chuyển đến
    urlPayPal.href = data?.href;
    // Đặt thuộc tính target để mở liên kết trong cửa sổ mới
    urlPayPal.target = '_parent';
    urlPayPal.click()

    },
    onError: () => {
      return notify("An error occurred, please try again ",'error');
    },
  });


  const onSubmit = (data: DataRequestInput):void => {
    const newDataRequest = {
      ...data,
      programId: `${sliceString}`,
      amount:Number(data.amount)
    };

    return onDonationMutation(newDataRequest)
  };

  const handleRegisterVolunteer = () => {

    onRegisterVolunteer({
      programId: sliceString,

    })
  }


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
        <Controller
          name={item.field}
          control={control}
          render={({ field }) => (
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
          )}
        />
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
                  <a href="/">
                    {`Home >`}
                  </a>
                </span>
                <span className="mr-2">
                  <a href="/program">
                    {`Program List >`}
                  </a>
                </span>
                <span>
                  {`Program Details `}
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
                            <strong>Raised:</strong> ${" "}
                            {itemDetails?.totalDonation
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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

                <div className="justify-content-between cause-card__bottom d-flex mb-5">
                    <Button  disabled={isCheckEnroll} className="px-4 py-3 btn btn-primary rounded" onClick={() => setIsOpenModalVolunteer(true) } >
                      Become A Volunteer
                    </Button>
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
                {isCheckEnroll && (

              <div id='containerDonate' style={{ backgroundColor: "#198754", borderRadius: "10px" }}>
                <form onSubmit={handleSubmit(onSubmit)} className="appointment">
                  <div className="row">
                    {inputHomeDonate.map((input) => (
                      <div key={input.field}>{renderInput(input)}</div>
                    ))}
                    <div className="">
                      <div className="form-group">
                        <Button
                        disabled={isLoading}
                          type="submit"
                          className="px-4 py-3 btn btn-secondary"
                        >
                          {isLoading ? <Spin /> : <div>Donate Now</div>}
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
                 )}

              <div className="result" />
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="cause-details__sidebar">
              <h4 className="cause-details__donations-title">Create By</h4>

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
                  <h4 className="cause-details__donations-title">Donations</h4>
                <div className="cause-details__donations">
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

      {isOpenModalVolunteer && (
         <Modal title="Register Volunteer" open={isOpenModalVolunteer} onOk={() => handleRegisterVolunteer()} onCancel={() => setIsOpenModalVolunteer(false)}>
         <p>Are you sure you want to register for this program? By registering, you will have access to the program's activities and contribute to it.</p>
       </Modal>
      )}
    </>
  );
}

export default CauseDetailsPage;
