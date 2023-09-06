// ** React Imports
import { useEffect, useState } from "react";

// ** MUI Imports
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
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
import useGlobalStore from "store/globalStore";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControlLabel } from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

// Styled component for the form
const Form = styled("form")(({ theme }) => ({
  maxWidth: 400,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

const LoginPage = () => {
const history = useHistory()
const updateUserInfoData = useGlobalStore((state) => state.setUserInfo);

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
      if (data && data.token) {
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
    onSuccess:async (data) => {
      if (data && data.status === 200) {
        await updateUserInfoData(data?.data);
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
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          onSubmit={(e) => e.preventDefault()}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {inputLogin.map((input) => (
              <div key={input.field}>{renderInput(input)}</div>
            ))}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(onSubmit)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/forgotpassword">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
