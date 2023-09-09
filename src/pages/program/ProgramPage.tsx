import React, { useEffect, useState } from "react";
import bg2 from "assets/images/carousel/bg_2.jpg";
import { Link } from "react-router-dom";
import { Space, Input, Image } from "antd";
import { Program } from "types/global";
import { useMutation } from "@tanstack/react-query";
import { onGetListProgramApi } from "./api";
import Loading from "components/Loading";
import { log } from "console";

const { Search } = Input;

function CausesPage() {
  // STATE
  const [listProgram, setListProgram] = useState<Program[] | []>([]);
  // SEARCH
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (value: string) => {
    onGetListProgram(value);
  };

  const { mutate: onGetListProgram } = useMutation(onGetListProgramApi, {
    onSuccess: (data) => {
      if (data && data.status === 200) {
        return setListProgram(data.data);
      }
    },
    onError: () => {
      setListProgram([]);
    },
  });

  useEffect(() => {
    onGetListProgram("");
  }, []);

  const handleCalculatorPercent = (item: Program) => {
    const Percentage = 0;
    if (item?.target > 0 && item?.totalDonation > 0) {
      const Percentage = (item?.totalDonation / item?.target) * 100;

      console.log("Percentage: ", Percentage);

      return Percentage;
    }

    return Percentage;
  };

  const handleReturnListProgram = (item: Program) => {
    if (!item.isClosed) {
      return (
        <div
          className="col-md-6 col-lg-3"
          key={`${item.name}_${item.programId}`}
        >
          <div className="text-center causes causes-2 ">
            <Image
              src={item.programThumbnail.path}
              alt={`Image_Program_${item?.name}`}
              className="img w-100"
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
                <a href="">{item.name}</a>
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
                <p>{item.description}</p>
              </div>

              <div className="mb-4 goal">
                <p>
                  <span>$ {item.target}</span> to go
                </p>
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar progress-bar-striped"
                    style={{
                      width: handleCalculatorPercent(item),
                      height: "20px",
                    }}
                  >
                    {handleCalculatorPercent(item)} %
                  </div>
                </div>
              </div>
              <p>
                <Link
                  className="btn btn-light w-100"
                  to={{
                    pathname: `/Programdetail/programId=${item?.programId}`,
                  }}
                >
                  Donate Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  // srearch

  // const filterProgram = () => {
  //   return listProgram.filter((program) => {
  //     return (
  //       program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       program.partner.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   });
  // };

  console.log("searchTerm", searchTerm);

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
                  <Link to="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </Link>
                </span>
                <span>
                  Program <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Program</h1>
            </div>
          </div>
        </div>
      </section>
      {/* list program */}
      <section className="ftco-section">
        <div className="container">
          <div
            className="d-flex justify-content-center"
            style={{ padding: "0px 0px 70px" }}
          >
            <Space style={{ width: "400px" }} direction="vertical">
              <Search
                placeholder="Program name or Partner name"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            </Space>
          </div>
          <div className="row">
            {Array.isArray(listProgram) &&
              listProgram.length > 0 &&
              listProgram.map((item) => handleReturnListProgram(item))}
            {/* {listProgram.map((item) => handleReturnListProgram(item))} */}
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
