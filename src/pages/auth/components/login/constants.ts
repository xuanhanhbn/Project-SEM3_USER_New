import * as Yup from "yup";

export const inputLogin = [
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
};

export const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User Name is required"),
  password: Yup.string().required("Password is required"),
});
