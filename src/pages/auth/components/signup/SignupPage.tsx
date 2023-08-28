// ** React Imports
import { useState, forwardRef } from "react";
import "./style.css";

// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";

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
import { useAppDispatch } from "store/hook";
import { registerActions } from "./registerSlice";

import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import Moment from "react-moment";
import moment from "moment";

// Styled component for the form
const Form = styled("form")(({ theme }) => ({
  maxWidth: 400,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label="Birth Date" fullWidth {...props} />;
});

const hidePass = (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
  </svg>
);

const showPass = (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
    <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
  </svg>
);

const SignUpPage = () => {
  const dispatch = useAppDispatch();

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

  // Handle Password
  const handleChange =
    (prop: string) => (event: { target: { value: any } }) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const onSubmit = (data: requestRegister) => {
    data.dateOfBirth = moment(data.dateOfBirth).format("YYYY-MM-DD");
    dispatch(registerActions.onRegister(data));
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
                            {values.showPassword ? hidePass : showPass}
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
                  onClick={handleSubmit(onSubmit)}
                >
                  Submit
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
