import { Button, CardContent, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import React from "react";
import { useHistory } from "react-router-dom";
import successImage from './image/success.png'
import { Image } from "antd";

const Form = styled("form")(({ theme }) => ({
  width: 600,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

const ResetSuccess = () => {
  const history = useHistory();


  return (
    <div className="container">
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ minHeight: 600 }}
      >
        <Form onSubmit={(e) => e.preventDefault()}>
          <div>
            <div className="d-flex justify-content-center align-items-center mb">
              <Image src={successImage} alt="image success" />
            </div>
          <div className="my-4">
          Password changed successfully. Please use the newly changed password to log in.
            </div>

            {/* BUTTON */}
            <Button
              size="large"
              variant="contained"
              fullWidth
              type="submit"
              onClick={() => history.push('/login')}
            >
              Go to Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResetSuccess;
