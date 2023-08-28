import * as Yup from "yup";

export const inputContact = [
  {
    field: "fullName",
    placeHolder: "Full Name",
  },
  {
    field: "email",
    placeHolder: "Email Address",
  },
  {
    field: "subject",
    placeHolder: "Subject",
  },
  {
    field: "message",
    placeHolder: "Message",
  },
];

export type typeInputContact = {
  field: string;
  placeHolder: string;
};

export type DataRequestInput = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid."),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});
