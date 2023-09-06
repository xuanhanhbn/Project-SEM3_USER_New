import { Container, LinearProgress } from "@mui/material";
import React, { Suspense, useState } from "react";
import { renderRoutes } from "react-router-config";
import { DashBoardProps } from "lib/interfaces";
import Header from "components/Header";
import { Link, useHistory } from "react-router-dom";
import Footer from "components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderLogin from "components/HeaderLogin";


const Layout: React.FC<DashBoardProps> = ({ route }) => {

  const history = useHistory();
  const ArrRouter = route?.routes || []

  const { location } = history;

  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Suspense fallback={<LinearProgress />}>
       {ArrRouter.filter(obj => obj.path === location.pathname).map(item => {
        return (
          <div key={`keyRoute_${item?.name}`}>
            {item.noAuth  ? <HeaderLogin /> : <Header />}
          </div>
        )
       })}
        <ToastContainer />

        {renderRoutes(route?.routes)}
         <Footer />
      </Suspense>
    </Container>
  );
};

export default Layout;
