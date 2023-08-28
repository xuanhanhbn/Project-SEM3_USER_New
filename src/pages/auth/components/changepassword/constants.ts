import * as Yup from "yup";

export const inputChangePassword = [
  {
    field: "password",
    placeHolder: "Password",
    type: "INPUT",
  },

  {
    field: "newPassword",
    placeHolder: "New Password",
    type: "INPUT",
  },
  {
    field: "confirmPassword",
    placeHolder: "Confirm Password",
    type: "INPUT",
  },
];

export type typeInputinputChangePassword = {
  field: string;
  placeHolder: string;
  type: string;
};

export type DataRequestInput = {
  newPassword: string;
  password: string;
  confirmPassword: string;
};

export const validationSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  newPassword: Yup.string().required("New pasword is required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("newPassword")], "Passwords do not match"),
});
