import * as Yup from "yup";

export const inputLogin = [
  {
    field: "fullName",
    placeHolder: "Full Name",
    type: "INPUT",
  },
  {
    field: "email",
    placeHolder: "Email Address",
    type: "INPUT",
  },
  {
    field: "phone",
    placeHolder: "Phone Number",
    type: "INPUT",
  },
  {
    field: "userName",
    placeHolder: "User Name",
    type: "INPUT",
  },
  {
    field: "password",
    placeHolder: "Password",
    type: "INPUT",
  },
];

export type typeInputLogin = {
  field: string;
  placeHolder: string;
  type: string;
};

export type DataRequestInput = {
  userName: string;
  password: string;
  phone: string;
  email: string;
  fullName: string;
  dateOfBirth: string;
  roles: string;
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User Name is required"),
  password: Yup.string().required("Password is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone numbers starting with 0")
    .min(10, "Phone number minium 10 characters"),
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid."),
  dateOfBirth: Yup.string().required("Birth day is required"),
  roles: Yup.string().required("Roles is required"),
});
