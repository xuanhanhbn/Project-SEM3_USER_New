import * as Yup from "yup";

export const inputLogin = [
  {
    field: "identifier",
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
  identifier: string;
  password: string;
};

export const validationSchema = Yup.object().shape({
  identifier: Yup.string().required("User Name is required"),
  password: Yup.string().required("Password is required"),
});
