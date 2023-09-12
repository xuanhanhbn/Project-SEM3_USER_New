import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import ImageSuccess from "assets/images/payment/success.jpeg";
import ImageFailed from "assets/images/payment/failed.jpeg";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { onCheckPaymentApi } from "./api";
import { useHistory, useParams } from "react-router-dom";
import {
  dataCheckPayment,
  requestCheckPayment,
  responseCheckPayment,
} from "./type";
import Loading from "components/Loading";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  const history = useHistory()

  const { donationId } = useParams<requestCheckPayment>();
  const [checkPayment, setCheckPayment] = useState<dataCheckPayment>();

  const { mutate: onCheckPayment, isLoading } = useMutation(onCheckPaymentApi, {
    onSuccess: (data) => {
      setCheckPayment(data);
    },
    onError: () => {},
  });

  useEffect(() => {
    onCheckPayment({ donationId: donationId });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Loading isLoading={isLoading} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <div

          >
            {checkPayment && checkPayment?.status === "Completed" && (
              <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
                <img
                  src={ImageSuccess}
                  alt="image_success"
                  width={80}
                  height={80}
                />
                <Typography variant="h2" component="h1" gutterBottom>
                  Donation Success
                </Typography>
                <p>
                  Thank you from the bottom of our hearts for your kind
                  contribution. Your donation makes a significant impact on our
                  program...
                </p>
              </div>
            )}
            {checkPayment && checkPayment?.status !== "Completed" && (
              <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
                <img
                  src={ImageFailed}
                  alt="image_failed"
                  width={80}
                  height={80}
                />
                <Typography variant="h2" component="h1" gutterBottom>
                  Donation Failed
                </Typography>
                <p>
                  We want to express our heartfelt appreciation for your
                  intention to donate to our program, even though the
                  transaction was unsuccessful. Your willingness to support our
                  cause means a lot to us...
                </p>
              </div>
            )}
          </div>

          <div className="d-flex justify-content-center">
            <Button variant="contained" onClick={() => history.push('/')}>Return to the program page</Button>
          </div>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
