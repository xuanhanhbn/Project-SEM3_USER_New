import bg from "assets/images/gallery/page-title-bg-1.jpg";
import bg3 from "assets/images/carousel/bg_3.jpg";
import React from "react";
import "./css.css";
import { Link } from "react-router-dom";

function CauseDetailsPage() {
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
                  Cause Details <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Cause Details</h1>
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
                      <img src={bg3} alt="" />
                    </div>
                    <div className="cause-card__content">
                      <div className="cause-card__top">
                        <div className="progress" style={{ height: "20px" }}>
                          <div
                            className="progress-bar progress-bar-striped"
                            style={{ width: "70%", height: "20px" }}
                          >
                            70%
                          </div>
                        </div>
                        <div className="justify-content-between cause-card__goals d-flex">
                          <p>
                            <strong>Raised:</strong> $25,270
                          </p>
                          <p>
                            <strong>Goal:</strong> $30,000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>Our donation is hope for poor childrens</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.{" "}
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </p>
                <div className="justify-content-between cause-card__bottom d-flex">
                  <p>
                    <Link className="btn btn-quarternary" to="/donation">
                      Donate Now
                    </Link>
                  </p>
                  <ul className="as-share-nav">
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
                  </ul>
                </div>
              </div>

              <div className="result" />
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="cause-details__sidebar">
                <div className="cause-details__organizer">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <p>Created 20 May, 2020</p>
                  <h3>
                    Organizer: <strong>Sarah Albert</strong>
                  </h3>
                  <ul className="list-unstyled cause-details__organizer-list">
                    <li>
                      <i className="fa fa-tag" />
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <i className="fa fa-map-marker-alt" />
                      <a href="#">New York, USA</a>
                    </li>
                  </ul>
                </div>
                <div className="cause-details__donations">
                  <h4 className="cause-details__donations-title">Donations</h4>
                  <ul className="list-unstyled cause-details__donations-list">
                    <li>
                      <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAA9AD4DAREAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABwgEBgkFAAID/8QAGwEAAgIDAQAAAAAAAAAAAAAAAwYEBQABAgf/2gAMAwEAAhADEAAAANBepf5ZnopV8X5vON0zdzX9+TCqOskWhTdDFnatslRQnjmlrtC/SEPkT4FDzJ1wPJ0Fw2KQzFRJa66etPLmoTWVcW+uK5t5Hwr0yMetsDMIl8HIg339R85GljXAWAZ4bo+NRr30xxdDxWCHYkF0vUEOaSOOpF1lY7uZFpV6ZUKmj6E2mO4o8Pb6m729s3ySqXEpNYle5kYtmBsri6yJkg+t9VfnTf3uDOGPRivMAw9l/MyeKKDmxoPX/8QAKRAAAQQDAAIBAwMFAAAAAAAABQMEBgcBAggJEgAKExURFBcWISMxMv/aAAgBAQABEgCadM1jA3eB0ulP7NbP/GrK6IkZ2dKR87oum2Wym60d9OiaE97ZemWyH4vVX9EZJ9RDOn5FQLAozHGujpohgIvSXk8Q6WGl3c4kQjSfJOtW7tnx9LrDy0bGJIX2y9UUdqao1I7esr+lrkY42SW1Bxr7Cg9yfMTgsJEs1XrtJ47zvoL5zNIEGyBiTrItNltdHbtvMjkAgyUWhF36lnYcbhAU18icYvfsvqwfzqo/Jh1x0a/JzB/F/ChyKMCNX86/qOYLNf1y2F9a+MTk+FcumrjijA7EZfGUMPPz9YTcxPq7rW65G2bJmJxBWBk1iAklWdyy5yhrjO2Acc/T5z6RI2h0XZUNmUoiAcTHirnRhv5DrMs+qOfVbTo2RlQRJhGSDlFCF+aHyqlXaLsV0I1aOXDbOnv47Jx1ZfACS9mWvZDiezQpDCgEWjRFm9i2LCJgvbNeoBjoRNVUCpyhXnc1sGTgPo6wln0GlAV6OJx3jaaPZPyDUbVZgk3TjQTWMstsLrOZbPGyC+umV4kD13zZBrBUkCMllcbZXg4bOdu8K8Qm/KuQzjT12SihtHT5zQtM+fmozrONUaynIqErb6mGHia7Ar2oCwvn0/FXC+ZK4e5EyKQ9YdK7MDWK7oXBIsio80ynButejwKRCZWTkK0F7q4wM0CsXcbBxiKroLpoDWiCTJWVSSfgM2QeqmCNpRJWUGCLho5LCAN3I2ETINcukhMWHNsqdJdTcry+sUwIS/oUstgY5RcISCK9Q0JUrWoeZukBBYNaeNxtmiPEuDqebd6V9TFxhWS73LMi3JsrJJOoXULmKl0JJI4M9boOolIaKir3pPp6ENmVcvEgLE020ZDinWNGJXQWpaYWMwDSSCTZ9Hi+KfdapX9IE3emPTaDDFMfJXC3NhP3K4BLT8kwJvE87hewtE8p4/j5EnlXOummXl5wdMSmS2jOXa6mmfso8avn867IqeDw+MIpZOXbGlSbDyE3HzhxpPsgJd0FBhKEzX3eN4LxrzRBq9h7GUwA2EPOZg1TWVm3UFqpWv0lc84YDHTxGUWufIjtecO5by58WT0h0t33ZJ6YT2G1f5JY3hV5IiwX9qu8V3UV0t3wsV1THPEOtqprqigHatKvZFLXCAWL7+OB5jOM5W3EsddPngZrh1L+3s2Lj3wnXtdFjCTr6meiKChNE15eKLVZpZa85UBsDX059FwOmfHHF+lonMTSGk8yWPzJg+mT88wzM184/InVt3Oyzs1shjC6KnpjTH9vhO21mL5RRX12QQxhP0mNiE5BRJUuST32c4h22q+6uibSnwmUNMY+yDYKfPp0wDBtVt2T/Onu73lMbDfPqsTZRWe88Rxyv7tFgUnIYR8dssLQL6acmZjy+UnbKq7MfIuCO2rMmCFJ6f4tPvb4xKSSyeirZPXGPTT2xlw/XcMtVtv9rPXO+/z/xAA1EAACAgEEAQIBCgQHAAAAAAABAgMEEgAFESETMUEiBhQVIzNRYXGBkRcyUqFDZHJzkrLB/9oACAEBABM/ABTlfP8AIopB0EZcHA5LKGA5HHZ4699WkLCwfGxaHEEHkqCR2OCo/I2tnmsPPKYknEZVJFDENJ41EYbpH6BKvqSq9RL9wxjCKCIkMQVCqpIQ9Ytk5yYVvEtMT1oxJGiHsdxr698jSHEg+LcF9RprsaHBLBUnKZ1HAJUBQfQ9DgHUNVpDFGTw0gQfzED2HZ1/DOw8tgR9RxyOrccYkx58DgMCSTyWv7QtGraqOiCOwqFQ8vC/UqwIPmDe0Q4nv+GvAw9GLRIruw6I70d2s2V3GLyxg+aKTMqIhjIskRBDRDn4SdVIFjje1PQiMjBVAAyJyI40357iut8uCpLZZrcgGBYHy4qpyI6GS/fq+iSxSTQqGUvHyQ662v5I1UkxK5EDon1AbW9VSAhpbhQwKKrpHIhWecYKYgrgl3JlJWp4IaF8gniICJjg3ABZy0g7X4ieQu53HtRQx3IHgxruYihMTSK6ujDkLw33BDIXni26tDTaSXyAfWGaKYErzGwVWQ8HTJkMD9LBhx78gEak+/5qvWv6uYCe/wBRreKzS7dGZqbxA2lRlfHGYuhB/nQc6ns4LtPmqK0taSPsyRyyVKrcg8o8ZPByOt23haj04Y53grTKHASxFyC8xQsUU4jEkE7Swjp29y8iFloJlmaXjMmQIxSSu4R25OrduOWadGqpIzSCNFEZDsyBOOgg1b3IU4txlFjdlMbTH7P4M2/EriPXVqq8DNLDEIn4VvUBg4DAkH21tG7pMBLYgwPHDEuA7E9e2tt+S31m1V1XCKSc3U4QsrPwYGJ1YfxzR3EqusUmQ+zlEmJRh6OQBrYSVuV6rxB4lmhKscmjMYL8Y+obtSNbrOZbF75vL5WsTc9JEiI0rcgdKOeB02+WhDBb8camtZWwwEWU0MkLMhIKS+ROwFZn4Kkc77iw9iCR0RpkBJgeZmI/R1BH+s627ciMpGOIjGSdnIgfdqe83jZuSPhWPEleueS3Y4618mdqEWawXk3O7PLguUgirVHkklcnBSTrevlTBV3XYpLU0jSW0jc8ja5pmlkzkxMDvL4/LF1BsdyOztk1J2DrBt06EpJUU8O0inKeQB34xjSNHUNHX+eypE7hyOligRioBbjoDVtvNA8Iy4jxf/D+JuFHGObFSCSTBcChXdy7AZDpefQHsa3Pfb1+xv29QQJZtTU5GGNV5JyYkgAw5x17lngQhfwHek9YNx3a3HttRwCCrEVoLpAbT2nmm33bDVs3LqX3cl5DDJ4XhfL4GtypxjJ1PvJ+jHNOzZqPXFBVaMGOKmfrgYpWLksde4luzNI5/QSyn8ONcdaB6Mj9/wBlQf8APSzkCdiiJkwHR7bL8xo95MaiNz/YDX+Wq7M1pBz+Mt+UnXoiSyWqEH/SEa90H0vuNbxp/R9oWLa/24gij9pSdf8AmvycRgftGP31/8QAMhEAAQMDAwIEBAQHAAAAAAAAAQIDEQAEIRIxQQVRE2FxgSIykbEGFaHBEBQjM8LR8f/aAAgBAgEBPwBT7TfzGkuJWKvrtmzt/Ec7wANye3p3NPdUvC2VNpA7zwAd/wBOeDVt1hxo6LlM8hQgCOZ3AilOpdLDiNle+4NQNZ9qMJE0bdMEjJoWrmqSIHqK/EbqbNCSPiIEjPJ89sAZp7rXV1W5LUBR4AmPc10rqt0kITc5KjEQAIPYQNqQDpt5zn04PFCPEHtTagVkET6etSUpxRWViFQfavxI+wt1VuRkJSZ4hZI/bJ4mr9hlCyGVyAJJExvngU45ZeGj+XBMQSdhA9zmulXj18y2twAaXigROUgYJnnJBpvLw9qb+Uz3P3NOuaST3NIQteU117pxebVdgCUIKSO6dUj6Ez6VbsLdaXqXzuBtG4/6KuLVDailqdW8duACMQSYgcgijYM9NUzbNTCV8mTJkmT3mmoNyAfKg2pvUlYgyfuaXYXy0GG1ZPIpu2v2GSsI+IbCM/XzrqH5b+RhKID50hQEyZkKB423pSR4hU0rTO42k9/9ikpeLiba1Op1ZGRsBMkz5DJNXfjvvNuxPxgny7mlYc+n3oLCOJ9qZ6mh9GsIxnntzT/WLh0nwgEp45Mec4/SlKMKWcqNdW6FdG4LloJCjkSBBO5BPBOSODkdh0npDPSWTB1OK+ZX+I5CR9ScmkiEitIO9FEira6DDJYVkiQMR+9aP6Q9BTxgAeppUAEUnTBHeuKM1NPFJtguM6f2o/2h6D7U7l32FLykU0K5H8DX/8QAMBEAAQMDAgUCBQMFAAAAAAAAAQIDEQAEIQUxEkFRYXEGgRATFJHBIiMyJEJiwtH/2gAIAQMBAT8AS2pW1FCk70xbLulcCfJPQdaa0y1C4Uon80bBtQ/aVHUHOe3nvQbKQ8le4/BoZrhkV9Qc4orQVEmvT9qL1RbSqAdzv7eTypr07pDb/C7KgOpgH2Ga1nSbNAWu2EBInBJOOpk0nPz46eedJyaPEEyDVqlDi4VQs2OlaNart0oeRASoqHeU5zHnHWKs3n1NfvIAVykg9Y2J/MA05b3p+YXyBOwBz4IIGNxgnFanp7OmvlttRPEylZmMKVJIEcoAI5iYNNRxic0hMte5qyw4KdbBbKcjxyzWmuuhoNSeGePwRgn3GDTrgBBSgCJGTAPuAT3xSrx9DB+cABsDmSeZE5iJORyo3Tt+t19yJUiMCBCcAAeB1MmrVKVvpSowOv3plI4CO5prRdZbdH9MvH+JoWF7cJPGwtEcyNwe3atXd0O19EJXbKSm8CUgwCFGTCwcRtuKtb123SQScDBSTMdJFXLzbhVcviGmwcHcnkPJNWbzKGloUYPCQO/SKb/kK0u9Zslq+amUkdAciketg4mVMfZX/RV5611J9R+mSltPIkcSo7z+kHwKffuLt0rfWVKOZJ/Gw9hWka5aoZDd2rhKdlQTIHIgcwMA8xg99U1RzUncDhbT/FP+x6qP2AwK2VQJBkULggZFB1xplQIkQYNTBpvc0TQyK61E1AilEiR3r+6KbEpPw5H4bfD/2Q=="
                        alt=""
                      />
                      <p>$20</p>
                      <h3>
                        David Marks <span>3 hours ago</span>
                      </h3>
                      <span>God bless you dear</span>
                    </li>
                    <li>
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                      <p>$20</p>
                      <h3>
                        David Marks <span>3 hours ago</span>
                      </h3>
                      <span>God bless you dear</span>
                    </li>
                    <li>
                      <img
                        src="data:image/jpeg;base64,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"
                        className="anonymus"
                        alt=""
                      />
                      <p>$20</p>
                      <h3>
                        Anonymus <span>3 hours ago</span>
                      </h3>
                      <span>God bless you dear</span>
                    </li>
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
