import { Container, LinearProgress } from "@mui/material";
import React, { Suspense, useState } from "react";
import { renderRoutes } from "react-router-config";
import { DashBoardProps } from "lib/interfaces";
import Header from "components/Header";
import { Link, useHistory } from "react-router-dom";
import Footer from "components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Layout: React.FC<DashBoardProps> = ({ route }) => {
  const history = useHistory();

  const { location } = history;

  // TODO: force user to login
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login />
  // }

  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Suspense fallback={<LinearProgress />}>
        {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== '/forgotpassword' && <Header />}
        <ToastContainer />

        {renderRoutes(route?.routes)}
         <Footer />
      </Suspense>
    </Container>
  );
};

export default Layout;
