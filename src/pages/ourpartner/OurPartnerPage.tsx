import React, { useEffect } from "react";
import "./gird.css";
import bg from "assets/images/gallery/page-title-bg-1.jpg";
import pn1 from "assets/images/partners/12ea69e9-8c54-4579-aa09-0e65dae025a9.jpg";
import pn2 from "assets/images/partners/attachment_26167826.jpg";
import pn3 from "assets/images/partners/attachment_75185576.png";
import pn4 from "assets/images/partners/attachment_87659723.png";
import pn5 from "assets/images/partners/attachment_89020120.jpg";
import pn6 from "assets/images/partners/attachment_91622765.jpg";
import pn7 from "assets/images/partners/attachment_96110917.jpg";
import pn8 from "assets/images/partners/attachment_96429374.png";
import pn9 from "assets/images/partners/attachment_101285985.jpg";
import pn10 from "assets/images/partners/attachment_109729989.png";
import pn11 from "assets/images/partners/attachment_113975607.jpg";
import pn12 from "assets/images/partners/attachment_129000522.jpg";
import { Link } from "react-router-dom";

import { useAppDispatch } from "store/hook";
import { partnerActions, selectPartnerList } from "./partnerSlice";
import { useSelector } from "react-redux";

const partnerList = [
  {
    name: "partners 1",
    img: pn12,

    path: "/partnerdetail",
  },
  {
    name: "partners 2",
    img: pn11,
    path: "/partnerdetail",
  },
  {
    name: "partners 3",
    img: pn3,
    path: "/partnerdetail",
  },
  {
    name: "partners 4",
    img: pn4,
    path: "/partnerdetail",
  },
  {
    name: "partners 5",
    img: pn5,
    path: "/partnerdetail",
  },
  {
    name: "partners 6",
    img: pn6,
    path: "/partnerdetail",
  },
  {
    name: "partners 7",
    img: pn7,
    path: "/partnerdetail",
  },
  {
    name: "partners 8",
    img: pn8,
    path: "/partnerdetail",
  },
  {
    name: "partners 9",
    img: pn9,
    path: "/partnerdetail",
  },
  {
    name: "partners 10",
    img: pn10,
    path: "/partnerdetail",
  },
  {
    name: "partners 11",
    img: pn11,
    path: "/partnerdetail",
  },
  {
    name: "partners 12",
    img: pn12,
    path: "/partnerdetail",
  },
];

function OurPartnerPage() {
  const dispatch = useAppDispatch();
  const globalData = useSelector(selectPartnerList);
  console.log()
  const dataPartner = globalData?.list;
  

  useEffect(() => {
    dispatch(partnerActions.getListPartner());
  }, []);

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
                  {partnerList.map((list) => {
                    return (
                      <div key={list.name} className="column">
                        <div>
                          <Link
                            className="card"
                            style={{ color: "black" }}
                            to={list.path}
                          >
                            <img
                              style={{ maxHeight: "125px", marginBottom: 10 }}
                              src={list.img}
                              alt=""
                            />
                            Our {list.name}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
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
