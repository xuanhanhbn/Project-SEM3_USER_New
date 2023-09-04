// ** React Imports
// ** MUI Imports
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import {
  DataRequestInput,
  inputForgotPassword,
  typeInputinputForgotPassword,
  validationSchema,
} from "./constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { requestForgotPassword } from "./type";
import { useMutation } from "@tanstack/react-query";
import { forgotPasswordApi } from "./api";
import { notify } from "utils/common";
import { Spin } from "antd";

// Styled component for the form
const Form = styled("form")(({ theme }) => ({
  maxWidth: 400,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));


const ForgotPassWord = () => {
  const history = useHistory()
   const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DataRequestInput>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(validationSchema)
  });

   // Call api
   const { mutate: onForgotPassword, isLoading } = useMutation(forgotPasswordApi, {
    onSuccess: (data) => {
      if (data && data.status === 200) {
        console.log("data: ", data);
        notify("Login Success", "success");
      } else {
        notify("An error occurred, please try again.", "error");
      }
    },
    onError: () => {
      notify("An error occurred, please try again.", "error");
    },
  });

  const onSubmit = (data: requestForgotPassword) => {
    // console.log('datA : ',data);
    history.push('/forgot-password/active-code')
    // onForgotPassword(data)
  };

  // render input
  const renderInput = (item: typeInputinputForgotPassword) => {
      return (
        <Controller
          name='email'
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <div style={{ marginBottom: 20 }}>
                <TextField
                  fullWidth
                  label={item.placeHolder}
                  placeholder="carterLeonard"
                  onChange={onChange}
                  value={value}
                />
                {errors &&
                  errors[item.field as keyof DataRequestInput] &&
                  errors[item.field as keyof DataRequestInput]?.message && (
                    <p
                      style={{ color: "red" }}
                      className="text-sm text-red-600"
                    >
                      {errors[item.field as keyof DataRequestInput]?.message}
                    </p>
                  )}
              </div>
            );
          }}
        />
      );

  };

  return (
    <div className="container">
      <CardContent
        sx={{
          minHeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={5}>

            <Grid item xs={12}>
              <Typography
                className=" d-flex"
                variant="h5"
                fontSize={24}
                fontWeight={700}
              >
                Forgot password
              </Typography>
            </Grid>

            <Grid item xs={12}>
              {inputForgotPassword.map((input) => (
                <div key={input.field}>{renderInput(input)}</div>
              ))}


              <Grid item xs={12}>
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit(onSubmit)}
                  disabled={isLoading}
                >
                  {isLoading ? <Spin /> : <div>Submit</div>}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </CardContent>
    </div>
  );
};

export default ForgotPassWord;
