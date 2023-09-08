import * as Yup from "yup";

export const inputHomeDonate = [
  {
    field: "reason",
    placeHolder: "Reason",
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
  amount: string;
  reason: string;
};

export const validationSchema = Yup.object().shape({
  reason: Yup.string().required("Reason is required"),
  amount: Yup.string().required("Amount is required"),
});
