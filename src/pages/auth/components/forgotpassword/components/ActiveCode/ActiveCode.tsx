import { Button, CardContent, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { requestInput } from "./type";
import { useMutation } from "@tanstack/react-query";
import { onCheckActiveCodeApi } from "./api";
import { notify } from "utils/common";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";

const validationSchema = Yup.object().shape({
  activeCode: Yup.string().required("Code is required"),
});

const Form = styled("form")(({ theme }) => ({
  maxWidth: 600,
  padding: theme.spacing(12),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

const ActiveCode = () => {
  const history = useHistory()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<requestInput>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      activeCode: "",
    },
    resolver: yupResolver(validationSchema),
  });

     // Call api
     const { mutate: onCheckActiveCode, isLoading } = useMutation(onCheckActiveCodeApi, {
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

  const onSubmit = (data:requestInput):void => {
    console.log('daT:A' ,data);
    // onCheckActiveCode(data)
    history.push('/forgot-password/reset-password')
  }

  return (
    <div className="container">
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ minHeight: 500 }}
      >
        <Form onSubmit={(e) => e.preventDefault()}>
          <div>
            <div>
              The verification code has been sent to your email. Please check
              your email and enter the code we sent to your email
            </div>
            <div className="my-4">
              <Controller
                control={control}
                name="activeCode"
                render={({ field: { onChange, value } }) => (
                  <div>
                    <TextField
                      fullWidth
                      label="Enter your code"
                      onChange={onChange}
                      value={value}
                      name="activeCode"
                    />
                    {errors && errors.activeCode?.message && (
                      <p
                        style={{ color: "red" }}
                        className="text-sm text-red-600"
                      >
                        {errors.activeCode?.message}
                      </p>
                    )}
                  </div>
                )}
              />
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

export default ActiveCode;
