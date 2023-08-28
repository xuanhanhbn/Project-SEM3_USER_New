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
    field: "phone",
    placeHolder: "Phone number",
    type: "INPUT",
  },
  
];

export const inputVolunteerRegistration = [
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
];

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid."),
  selectCauses: Yup.string().required("selectCauses is required"),
  amount: Yup.string().required("Amout is required"),
  payload: Yup.string().required("Payload is required"),
  phone: Yup.string().required("Phone number is required"),
});

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
  payload: string;
  phone: string;
};


