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
import CardHeader from "@mui/material/CardHeader";

import {
  DataRequestInput,
  inputLogin,
  typeInputLogin,
  validationSchema,
} from "./constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import { requestRegister } from "./type";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import Moment from "react-moment";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMutation } from "@tanstack/react-query";
import { registerApi } from "./api";
import { notify } from "utils/common";

import moment from "moment";

function Copyright(props: any) {
  return (
    <Typography color="text.secondary" align="center" {...props}>
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


const SignUpPage = () => {
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
      userName: "",
      password: "",
      phone: "",
      email: "",
      dateOfBirth: "",
      fullName: "",
      // roles: ["user"],
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
        history.push('/login')
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
      dateOfBirth: moment(data.dateOfBirth).format("YYYY-MM-DD"),
      roles:['user']
    }
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

  // const handleDisableDate: RangePickerProps['disabledDate'] = (current) => {
  //   // Can not select days before today and today
  //   return current && current >= moment().endOf('day');
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
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
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid className="input-signup" container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="fullName"
                          label="Full Name"
                          onChange={onChange}
                          value={value}
                          placeholder="Carter Leonard"
                          autoFocus
                        />
                        {errors.fullName && (
                          <p
                            style={{ color: "red" }}
                            className="text-sm text-red-600"
                          >
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email"
                          onChange={onChange}
                          value={value}
                          placeholder="carter@gmail.com"
                          autoFocus
                        />
                        {errors.email && (
                          <p
                            style={{ color: "red" }}
                            className="text-sm text-red-600"
                          >
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    );
                  }}
                />
              </Grid>
              <Grid sx={{ paddingTop: "0px" }} item xs={12} sm={6}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="phone"
                          label="Phone number"
                          onChange={onChange}
                          value={value}
                          placeholder="0123456789"
                          autoFocus
                        />
                        {errors.phone && (
                          <p
                            style={{ color: "red" }}
                            className="text-sm text-red-600"
                          >
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    );
                  }}
                />
              </Grid>
              <Grid sx={{ paddingTop: 0 }} item xs={12} sm={6}>
                <Controller
                  name="dateOfBirth"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            onChange={onChange}
                            sx={{
                              marginTop: "16px",
                              marginBottom: " 8px",
                            }}
                            label="Birth Date"
                          />
                        </LocalizationProvider>
                        {errors.dateOfBirth && (
                          <p
                            style={{ color: "red" }}
                            className="text-sm text-red-600"
                          >
                            {errors.dateOfBirth.message}
                          </p>
                        )}
                      </div>
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="userName"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="userName"
                          label="User Name"
                          onChange={onChange}
                          value={value}
                          placeholder="carter123"
                          autoFocus
                        />
                        {errors.userName && (
                          <p
                            style={{ color: "red" }}
                            className="text-sm text-red-600"
                          >
                            {errors.userName.message}
                          </p>
                        )}
                      </div>
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          type="password"
                          id="password"
                          label="Password"
                          onChange={onChange}
                          value={value}
                          autoFocus
                        />
                        {errors.password && (
                          <p
                            style={{ color: "red" }}
                            className="text-sm text-red-600"
                          >
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                    );
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignUpPage;
