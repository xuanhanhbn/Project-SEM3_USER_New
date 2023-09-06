import * as Yup from "yup";

export const inputForgotPassword = [
  {
    field: "email",
    placeHolder: "Email Address",
    type: "INPUT",
  },

];

export type typeInputinputForgotPassword = {
  field: string;
  placeHolder: string;
  type: string;
};

export type DataRequestInput = {
  email: string;
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
});
