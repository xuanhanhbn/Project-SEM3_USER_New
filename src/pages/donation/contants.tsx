import * as Yup from "yup";

export const inputHomeDonate = [
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
    field: "selectCauses",
    placeHolder: "Select Causes",
    type: "SELECT",
  },
  {
    field: "amount",
    placeHolder: "Amount",
    type: "INPUT",
  },
];

export type typeInputDonate = {
  field: string;
  placeHolder: string;
  type: string;
};

export type DataRequestInput = {
  fullName: string;
  email: string;
  amount: string;
  selectCauses: string;
  payment: string;
};

export const listCauses = [
  {
    field: "",
    value: "",
  },
  {
    field: "houseWashing",
    value: "House Washing",
  },
  {
    field: "roofCleaning",
    value: "Roof Cleaning",
  },
  {
    field: "drivewayCleaning",
    value: "Driveway Cleaning",
  },
  {
    field: "gutterCleaning",
    value: "Gutter Cleaning",
  },
];

export const radioPayload = [
  {
    field: "creditCard",
    value: "Credit Card",
  },
  {
    field: "paypal",
    value: "Paypal",
  },
  {
    field: "payoneer",
    value: "Payoneer",
  },
];

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid."),
  selectCauses: Yup.string().required("selectCauses is required"),
  amount: Yup.string().required("Amount is required"),
  payment: Yup.string().required("Payload is required"),
});
