import React, { useEffect, useState } from "react";
import "./gird.css";
import bg from "assets/images/gallery/page-title-bg-1.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useMutation } from "@tanstack/react-query";
import { onGetListPartnerApi } from "./api";
import { notify } from "utils/common";
import { Partner } from "types/global";
import { responsePartnersList } from "./type";
import { Image } from "antd";



function OurPartnerPage() {
  // STATE
  const [listPartner, setListPartner] = useState<Partner[] | []>([]);

  const { mutate: onGetListPartner } = useMutation(onGetListPartnerApi, {
    onSuccess: (data) => {
      if (data && data.status === 200) {
        return setListPartner(data.data);
      }
    },
    onError: () => {
      setListPartner([]);
    },
  });

  useEffect(() => {
    onGetListPartner();
  }, []);

  const handleReturnListPartner = (item: Partner) => {
    return (
      <div key={item.partnerId} className="column">
        <div>
          <Link
            className="card"
            style={{ color: "black" }}
            to={`/partnerdetail/partnerId=${item.partnerId}`}
          >
            <Image src={item.partnerThumbnail.path} className="img w-100" alt="Image Partner" />

            {item.name}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
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
                  Our partners <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Our partners</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row">
                  <h1
                    style={{
                      fontWeight: 700,
                      fontSize: "4.5rem",
                      lineHeight: 1.1,
                      marginBottom: 50,
                      textAlign: "center",
                    }}
                    className="title"
                  >
                    Pleasure to work with
                  </h1>
                </div>
                <div className="row">
                  {Array.isArray(listPartner) &&
                    listPartner.length > 0 &&
                    listPartner.map((item) => handleReturnListPartner(item))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurPartnerPage;
