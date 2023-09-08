import React, { useEffect, useState } from "react";
import bg from "assets/images/gallery/page-title-bg-1.jpg";
import img from "assets/images/partners/attachment_129000522.jpg";
import { Link, useParams } from "react-router-dom";
import bg2 from "assets/images/carousel/bg_2.jpg";
import { RouterParams } from "pages/ourpartner/type";
import { PartnerDetail, Program, ProgramByPartner } from "types/global";
import { useMutation } from "@tanstack/react-query";
import { onGetListPartnerDetailsApi } from "pages/ourpartner/api";
import { Image } from "antd";

import { onGetPartnerDetailApi } from "./api";
import { notify } from "utils/common";
import { responsePartnerDetail } from "./type";

function PartnerDetailPage() {
  const { partnerId } = useParams<RouterParams>();

  const sliceString = partnerId?.replace("partnerId=", "");

  const [itemDetails, setItemDetails] = useState<PartnerDetail>();

  const { mutate: getListDetails } = useMutation(onGetListPartnerDetailsApi, {
    onSuccess: (data) => {
      setItemDetails(data);
    },
    onError: () => {},
  });

  useEffect(() => {
    if (sliceString) {
      getListDetails({ partnerId: sliceString });
    }
  }, [sliceString]);

  // const handleCalculatorPercent = (item:ProgramByPartner) => {
  //   const Percentage = 0;
  //   if (item) {
  //     if (item?.target > 0 && item?.totalDonation > 0) {
  //       const Percentage =
  //         (item?.target / item?.totalDonation) * 100;

  //       return Percentage;
  //     }
  //   }

  //   return Percentage;
  // };

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
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span>
                  <a href="/ourpartner">
                    Partner list <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span>
                  Partner detail <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Partner detail</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 ftco-section">
        <div className="px-6">
          <div className="row">
            {/* <div className="col-lg-12"> */}
            {/* <div className="wrapper">
                <div className=" row"> */}
            <div className="col-lg-4">
              <div>
                <div className=" d-flex align-items-center">
                  <div>
                    <Image
                      style={{
                        maxHeight: "80px",
                        marginBottom: 10,
                        border: "1px solid",
                        borderRadius: "50%",
                        marginRight: 15,
                      }}
                      src={itemDetails?.partnerThumbnail?.path}
                      alt={`Image_Partner_${itemDetails?.name}`}
                    />
                  </div>
                  <div>
                    <h3>{itemDetails?.name}</h3>
                  </div>
                </div>
                <div className="contact">
                  <h3>{`Email: ${itemDetails?.email}`}</h3>
                </div>
                <div className="content">{itemDetails?.description}</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div style={{ minHeight: 100 }} className="title">
                <h1>Program</h1>
              </div>
              <div className="program">
                <div className="row">
                  {itemDetails?.programs.map((itemProgram) => (
                    <div
                      className="col-md-6 col-lg-4"
                      key={itemProgram.programId}
                    >
                      <div className="text-center causes causes-2 ftco-animate">
                        <Image
                          className="img w-100"
                          src={itemProgram?.programThumbnail?.path}
                        />
                        <div className="p-3 text">
                          <h2
                            style={{
                              textOverflow: "ellipsis",
                              maxHeight: "3em",
                              overflow: "hidden",
                              minHeight: "60px",
                            }}
                          >
                            <a href="#">{itemProgram.name}</a>
                          </h2>
                          <div
                            style={{
                              textOverflow: "ellipsis",
                              maxHeight: "4.5em",
                              overflow: "hidden",
                              WebkitLineClamp: 3,
                              minHeight: "72px",
                            }}
                          >
                            <p>{itemProgram.description}</p>
                          </div>

                          <div style={{ marginTop: 20 }}>
                            <div className="mb-4 goal">
                              <p>
                                <span>{`$ ${itemProgram.target}`}</span> to go
                              </p>
                              <div className="progress" style={{ height: 20 }}>
                                <div
                                  className="progress-bar progress-bar-striped"
                                  style={{ width: "95%", height: 20 }}
                                >
                                  {/* {handleCalculatorPercent(itemProgram)} */}
                                </div>
                              </div>
                            </div>
                            <p>
                              <Link
                                to="/causedetails"
                                className="btn btn-light w-100"
                              >
                                Donate Now
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnerDetailPage;
