import React, { useEffect } from "react";
import bg2 from "assets/images/carousel/bg_2.jpg";
import { Link } from "react-router-dom";
import { useAppDispatch } from "store/hook";
import { causesActions, makeSelectCauses } from "./causesSlice";
import { useSelector } from "react-redux";

function CausesPage() {
  const dispatch = useAppDispatch();
  const globalData = useSelector(makeSelectCauses);
  const dataCauses = globalData?.list;
  console.log("causes", dataCauses);
  useEffect(() => {
    dispatch(causesActions.getListCauses());
  }, []);

  return (
    <div>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: `url(  ${bg2})`,
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
                  Causes <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Causes</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="text-center causes causes-2 ftco-animate">
                <a
                  href="#"
                  className="img w-100"
                  style={{ backgroundImage: `url(  ${bg2})` }}
                />
                <div className="p-3 text">
                  <h2>
                    <a href="#">Save the poor children from hunger</a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <div className="mb-4 goal">
                    <p>
                      <span>$3,800</span> to go
                    </p>
                    <div className="progress" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: "70%", height: 20 }}
                      >
                        70%
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link to="/causedetails" className="btn btn-light w-100">
                      Donate Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center causes causes-2 ftco-animate">
                <a
                  href="#"
                  className="img w-100"
                  style={{ backgroundImage: `url(  ${bg2})` }}
                />
                <div className="p-3 text">
                  <h2>
                    <a href="#">Save the poor children from hunger</a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <div className="mb-4 goal">
                    <p>
                      <span>$3,800</span> to go
                    </p>
                    <div className="progress" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: "82%", height: 20 }}
                      >
                        82%
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link to="/causedetails" className="btn btn-light w-100">
                      Donate Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center causes causes-2 ftco-animate">
                <a
                  href="#"
                  className="img w-100"
                  style={{ backgroundImage: `url(  ${bg2})` }}
                />
                <div className="p-3 text">
                  <h2>
                    <a href="#">Save the poor children from hunger</a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <div className="mb-4 goal">
                    <p>
                      <span>$3,800</span> to go
                    </p>
                    <div className="progress" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: "95%", height: 20 }}
                      >
                        95%
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link to="/causedetails" className="btn btn-light w-100">
                      Donate Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center causes causes-2 ftco-animate">
                <a
                  href="#"
                  className="img w-100"
                  style={{ backgroundImage: `url(  ${bg2})` }}
                />
                <div className="p-3 text">
                  <h2>
                    <a href="#">Save the poor children from hunger</a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <div className="mb-4 goal">
                    <p>
                      <span>$3,800</span> to go
                    </p>
                    <div className="progress" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: "75%", height: 20 }}
                      >
                        75%
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link to="/causedetails" className="btn btn-light w-100">
                      Donate Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center causes causes-2 ftco-animate">
                <a
                  href="#"
                  className="img w-100"
                  style={{ backgroundImage: `url(  ${bg2})` }}
                />
                <div className="p-3 text">
                  <h2>
                    <a href="#">Save the poor children from hunger</a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <div className="mb-4 goal">
                    <p>
                      <span>$3,800</span> to go
                    </p>
                    <div className="progress" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: "70%", height: 20 }}
                      >
                        70%
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link to="/causedetails" className="btn btn-light w-100">
                      Donate Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center causes causes-2 ftco-animate">
                <a
                  href="#"
                  className="img w-100"
                  style={{ backgroundImage: `url(  ${bg2})` }}
                />
                <div className="p-3 text">
                  <h2>
                    <a href="#">Save the poor children from hunger</a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <div className="mb-4 goal">
                    <p>
                      <span>$3,800</span> to go
                    </p>
                    <div className="progress" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: "82%", height: 20 }}
                      >
                        82%
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link to="/causedetails" className="btn btn-light w-100">
                      Donate Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center causes causes-2 ftco-animate">
                <a
                  href="#"
                  className="img w-100"
                  style={{ backgroundImage: `url(  ${bg2})` }}
                />
                <div className="p-3 text">
                  <h2>
                    <a href="#">Save the poor children from hunger</a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <div className="mb-4 goal">
                    <p>
                      <span>$3,800</span> to go
                    </p>
                    <div className="progress" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: "95%", height: 20 }}
                      >
                        95%
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link to="/causedetails" className="btn btn-light w-100">
                      Donate Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center causes causes-2 ftco-animate">
                <a
                  href="#"
                  className="img w-100"
                  style={{ backgroundImage: `url(  ${bg2})` }}
                />
                <div className="p-3 text">
                  <h2>
                    <a href="#">Save the poor children from hunger</a>
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <div className="mb-4 goal">
                    <p>
                      <span>$3,800</span> to go
                    </p>
                    <div className="progress" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        style={{ width: "75%", height: 20 }}
                      >
                        75%
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link to="/causedetails" className="btn btn-light w-100">
                      Donate Now
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 row">
            <div className="text-center col">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CausesPage;
