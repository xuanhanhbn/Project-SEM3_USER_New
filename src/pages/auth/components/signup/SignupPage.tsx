// ** React Imports
import { useState, forwardRef } from "react";
import "./style.css";

// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

import {
  DataRequestInput,
  inputLogin,
  typeInputLogin,
  validationSchema,
} from "./constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

import { requestRegister } from "./type";

import { DatePicker, Space, Spin } from "antd";
import moment, { Moment } from "moment";
import { useMutation } from "@tanstack/react-query";
import { registerApi } from "./api";
import { notify } from "utils/common";
import type { RangePickerProps } from "antd/es/date-picker";

// Styled component for the form
const Form = styled("form")(({ theme }) => ({
  maxWidth: 400,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));


const SignUpPage = () => {

  // ** State
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DataRequestInput>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      userName: "",
      password: "",
      phone: "",
      email: "",
      dateOfBirth: "",
      fullName: "",
      roles: "user",
    },
    resolver: yupResolver(validationSchema),
  });


  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  // Call api
  const {
    mutate: onRegister,
    isLoading,
  } = useMutation(registerApi, {
    onSuccess: (data) => {
      if (data && data.status === 200) {
        notify('Register Success','success')
      } else {
        notify('An error occurred, please try again.','error')
      }
    },
    onError: () => {
      notify('An error occurred, please try again.','error')

    }
  });

  const onSubmit = (data: requestRegister):void => {
    const newDataRequest = {
      ...data,
      dateOfBirth: moment(data.dateOfBirth).format("YYYY-MM-DD")
    }
    // data.dateOfBirth = moment(data.payload.dateOfBirth).format("YYYY-MM-DD");
    // dispatch(registerActions.onRegister(newDataRequest));
    onRegister(newDataRequest)
  };

  // render input
  const renderInput = (item: typeInputLogin) => {
    if (
      item.field === "userName" ||
      item.field === "fullName" ||
      item.field === "phone" ||
      item.field === "email"
    ) {
      return (
        <Controller
          name={item.field}
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
    }
    if (item.field === "password") {
      return (
        <>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="form-layouts-alignment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      label="Password"
                      value={value}
                      onChange={onChange}
                      id="form-layouts-alignment-password"
                      type={values.showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            aria-label="toggle password visibility"
                          >
                            {values.showPassword ? <EyeOffOutline />: <EyeOutline />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {errors.password && (
                      <p
                        style={{ color: "red" }}
                        className="text-sm text-red-600"
                      >
                        {errors.password.message}
                      </p>
                    )}
                  </FormControl>
                </>
              );
            }}
          />
        </>
      );
    }
  };

  const handleDisableDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current >= moment().endOf('day');
  };

  return (
    <Card>
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
                className="justify-content-around d-flex"
                variant="h5"
                fontSize={24}
                fontWeight={700}
              >
                Sign up
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {inputLogin.map((input) => (
                <div key={input.field}>{renderInput(input)}</div>
              ))}

              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <div style={{ marginBottom: 20, marginTop: 20 }}>
                      <Space>
                        <DatePicker
                          placeholder="Birth date"
                          showToday={false}
                          onChange={onChange}
                          disabledDate={handleDisableDate}
                        />
                      </Space>
                    </div>
                  );
                }}
              />

              <Grid
                className="justify-content-around d-flex"
                style={{ margin: "20px 0px" }}
                item
                xs={12}
              >
                <Typography variant="h5">
                  <Link style={{ color: "#e83e8c" }} to="/forgotpassword">
                    Forgot password?
                  </Link>
                </Typography>
                <Typography variant="h5">
                  <Link style={{ color: "#e83e8c" }} to="/login">
                    Sign in
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%" }}
                  disabled={isLoading}
                  onClick={handleSubmit(onSubmit)}
                >
                  {isLoading ? <Spin /> : <div>Submit</div>}

                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignUpPage;
