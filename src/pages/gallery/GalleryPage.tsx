import React from "react";
import bg from "assets/images/gallery/page-title-bg-1.jpg";
import image1 from "assets/images/gallery/Gallery-12.jpg";
import image2 from "assets/images/gallery/Gallery-1.jpg";
import image3 from "assets/images/gallery/Gallery-9.jpg";
import image4 from "assets/images/gallery/Gallery-3.jpg";
import image5 from "assets/images/gallery/Gallery-4.jpg";
import image6 from "assets/images/gallery/Gallery-5.jpg";
import image7 from "assets/images/gallery/Gallery-6.jpg";
import image8 from "assets/images/gallery/Gallery-7.jpg";
import image9 from "assets/images/gallery/Gallery-8.jpg";
import image10 from "assets/images/gallery/Gallery-9.jpg";
import image11 from "assets/images/gallery/Gallery-10.jpg";
import image12 from "assets/images/gallery/Gallery-11.jpg";
import { Image, Col, Divider, Row } from "antd";

const imageItems = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

function GalleryPage() {
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
                  Gallery <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Gallery</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div
            className="row d-flex no-gutters"
            style={{ padding: "40px 0px" }}
          >
            <Image.PreviewGroup items={imageItems}>
              <Row
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                  lg: 32,
                }}
              ></Row>
              {imageItems.map((img, index) => {
                return (
                  <Col
                    style={{
                      marginBottom: 32,
                      display: "flex",
                      justifyContent: "center",
                    }}
                    className="gutter-row"
                    span={6}
                    key={index}
                  >
                    <Image width={200} src={img} />
                  </Col>
                );
              })}
            </Image.PreviewGroup>
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
