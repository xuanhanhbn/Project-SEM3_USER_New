// ** React Imports
import { useState } from "react";

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
  inputForgotPassword,
  typeInputinputForgotPassword,
  validationSchema,
} from "./constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { requestForgotPassword } from "./type";

// Styled component for the form
const Form = styled("form")(({ theme }) => ({
  maxWidth: 400,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));


const ForgotPassWord = () => {

  // ** State
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const [valuesConfirm, setValuesConfirm] = useState({
    passwordConfirm: "",
    showPasswordConfirm: false,
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
      newPassword: "",
      email: "",
      confirmPassword: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setValuesConfirm({
      ...valuesConfirm,
      showPasswordConfirm: !valuesConfirm.showPasswordConfirm,
    });
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const onSubmit = (data: requestForgotPassword) => {
    console.log('datA : ',data);

  };

  // render input
  const renderInput = (item: typeInputinputForgotPassword) => {
    if (item.field === "userName" || item.field === "email") {
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
    if (item.field === "newPassword") {
      return (
        <div style={{ marginBottom: 20 }}>
          <Controller
            name="newPassword"
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
                      label="New Password"
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
                            {values.showPassword ? <EyeOffOutline /> : <EyeOutline />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {errors.newPassword && (
                      <p
                        style={{ color: "red" }}
                        className="text-sm text-red-600"
                      >
                        {errors.newPassword.message}
                      </p>
                    )}
                  </FormControl>
                </>
              );
            }}
          />
        </div>
      );
    }
    if (item.field === "confirmPassword") {
      return (
        <div style={{ marginBottom: 20 }}>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="form-layouts-alignment-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      label="Confirm Password"
                      value={value}
                      onChange={onChange}
                      id="form-layouts-alignment-password"
                      type={
                        valuesConfirm.showPasswordConfirm ? "text" : "password"
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            aria-label="toggle password visibility"
                          >
                            {valuesConfirm.showPasswordConfirm
                              ? <EyeOffOutline />
                              : <EyeOutline />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {errors.confirmPassword && (
                      <p
                        style={{ color: "red" }}
                        className="text-sm text-red-600"
                      >
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </FormControl>
                </>
              );
            }}
          />
        </div>
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
                Forgot password
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {inputForgotPassword.map((input) => (
                <div key={input.field}>{renderInput(input)}</div>
              ))}

              <Grid
                className="justify-content-around d-flex"
                style={{ margin: "20px 0px" }}
                item
                xs={12}
              >
                <Typography variant="h5">
                  <Link style={{ color: "#e83e8c" }} to="/signup">
                    Sign up
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

export default ForgotPassWord;
