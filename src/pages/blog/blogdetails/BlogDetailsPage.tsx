import React from "react";
import bg2 from "assets/images/carousel/bg_2.jpg";
import { Link } from "react-router-dom";

function BlogDetailsPage() {
  return (
    <>
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
                  Blog details <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Blog details</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetailsPage;
