// ** React Imports
import { useEffect, useState } from "react";

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
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";

import {
  DataRequestInput,
  inputLogin,
  typeInputLogin,
  validationSchema,
} from "./constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { requestLogin } from "./type";
import { notify } from "utils/common";
import { Spin } from "antd";
import { useMutation } from "@tanstack/react-query";
import { getUserInfo, onLoginApi } from "./api";

// Styled component for the form
const Form = styled("form")(({ theme }) => ({
  maxWidth: 400,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

const LoginPage = () => {
const history = useHistory()
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
      identifier: "",
      password: "",
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
  const { mutate: onLogin, isLoading } = useMutation(onLoginApi, {
    onSuccess: (data) => {
      if (data && data.status === 200) {
        console.log("data: ", data);
        onGetUserInfo()
        notify("Login Success", "success");
        localStorage.setItem("loginData", data.token);
      } else {
        notify("An error occurred, please try again.", "error");
      }
    },
    onError: () => {
      notify("An error occurred, please try again.", "error");
    },
  });

  const { mutate: onGetUserInfo } = useMutation(getUserInfo, {
    onSuccess: (data) => {
      if (data && data.status === 200) {
        history.push('/')
      } else {
        notify("An error occurred, please try again.", "error");
      }
    },
    onError: () => {
      notify("An error occurred, please try again.", "error");
    },
  });

  const onSubmit = (data: requestLogin) => {
    onLogin(data)
  };

  // render input
  const renderInput = (item: typeInputLogin) => {
    if (item.field === "identifier") {
      return (
        <Controller
          name="identifier"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <div style={{ marginBottom: 20 }}>
                <TextField
                  fullWidth
                  label="Username"
                  placeholder="carterLeonard"
                  onChange={onChange}
                  value={value}
                />
                {errors.identifier && (
                  <p style={{ color: "red" }} className="text-sm text-red-600">
                    {errors.identifier.message}
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
                            {values.showPassword ? (
                              <EyeOutline />
                            ) : (
                              <EyeOffOutline />
                            )}
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
                Login
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {inputLogin.map((input) => (
                <div key={input.field}>{renderInput(input)}</div>
              ))}

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
                  <Link style={{ color: "#e83e8c" }} to="/signup">
                    Login
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  disabled={isLoading}
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%" }}
                  onClick={handleSubmit(onSubmit)}
                >
                  {isLoading ? <Spin spinning={isLoading} /> : "Login"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
