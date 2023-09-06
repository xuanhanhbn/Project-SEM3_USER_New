import { Button, CardContent, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { notify } from "utils/common";
import { useHistory } from "react-router-dom";
import { renderInput, requestInput } from "./type";
import { onResetPasswordApi } from "./api";
import { Spin } from "antd";

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required("Password is required"),
  confirmNewPassword: Yup.string()
    .required("Please re-enter your password")
    .test(
      "password-match",
      "Passwords do not match. Please try again.",
      function (value) {
        return value === this.resolve(Yup.ref("newPassword")) || value === null;
      }
    ),
});

const Form = styled("form")(({ theme }) => ({
  width: 600,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

const ResetPassword = () => {
  const history = useHistory();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<requestInput>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: yupResolver(validationSchema),
  });

  // Call api
   const { mutate: onResetPassword, isLoading } = useMutation(onResetPasswordApi, {
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

  const onSubmit = (data: any): void => {
    console.log("daT:A", data);
    // onResetPassword(data)
    history.push('/forgot-password/success')
  };

  return (
    <div className="container">
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ minHeight: 600 }}
      >
        <Form onSubmit={(e) => e.preventDefault()}>
          <div>
          <div>
              Please enter your new password
            </div>
            <div className="my-4">
              <div className="mb-4">
                <Controller
                  control={control}
                  name="newPassword"
                  render={({ field: { onChange, value } }) => (
                    <div>
                      <TextField
                        fullWidth
                        label="Enter your password"
                        onChange={onChange}
                        value={value}
                        name="newPassword"
                      />
                      {errors && errors.newPassword?.message && (
                        <p
                          style={{ color: "red" }}
                          className="text-sm text-red-600"
                        >
                          {errors.newPassword?.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div>
                <Controller
                  control={control}
                  name="confirmNewPassword"
                  render={({ field: { onChange, value } }) => (
                    <div>
                      <TextField
                        fullWidth
                        label="Enter your confirm password"

                        onChange={onChange}
                        value={value}
                        name="confirmNewPassword"
                      />
                      {errors && errors.confirmNewPassword?.message && (
                        <p
                          style={{ color: "red" }}
                          className="text-sm text-red-600"
                        >
                          {errors.confirmNewPassword?.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
            {/* BUTTON */}
            <Button
              size="large"
              variant="contained"
              fullWidth
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={isLoading}
            >
              {isLoading ? <Spin /> : <div>Submit</div>}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
