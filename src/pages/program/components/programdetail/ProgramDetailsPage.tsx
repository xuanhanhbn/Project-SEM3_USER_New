import bg from "assets/images/gallery/page-title-bg-1.jpg";
import BlankUser from "assets/images/team/BlankUser2.png";
import React, { useEffect, useState } from "react";
import "./css.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { RouteParams } from "pages/program/type";
import { useMutation } from "@tanstack/react-query";
import { getProgramDetails } from "pages/program/api";
import { Program, ProgramDetail } from "types/global";
import { Image } from "antd";
import moment from "moment";
import RealTime from "components/RealTime";

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
                <h3>{itemDetails?.name}</h3>
                <p>{itemDetails?.description}</p>

                <div className="justify-content-between cause-card__bottom d-flex">
                  <p>
                    <Link className="btn btn-quarternary" to="/donation">
                      Donate Now
                    </Link>
                  </p>
                  {/* <ul className="as-share-nav">
                    <li>
                      <span>Share Via:</span>
                    </li>
                    <li>
                      <a href="#" className="fa fa-facebook">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />{" "}
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-linkedin">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-pinterest-p">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-google-plus">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" />{" "}
                        </svg>
                      </a>
                    </li>
                  </ul> */}
                </div>
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
                  {/* <ul className="list-unstyled cause-details__organizer-list">
                    <li>
                      <i className="fa fa-tag" />
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <i className="fa fa-map-marker-alt" />
                      <a href="#">New York, USA</a>
                    </li>
                  </ul> */}
                </div>
                <div className="cause-details__donations">
                  <h4 className="cause-details__donations-title">Donations</h4>
                  <ul className="list-unstyled cause-details__donations-list">
                    {itemDetails?.enrollments.map((itemEnroll) => (
                      <li key={itemEnroll.enrollmentId}>

                        <Image src={BlankUser} alt="User Donation" width={60} height={60} />
                        <h3>
                          {itemEnroll.createdByName}
                        </h3>
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
