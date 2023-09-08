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
  programId: string;
  amount: number;
  reason: string;
};

export const validationSchema = Yup.object().shape({
  programId: Yup.string().required("Program id is required"),
  reason: Yup.string().required("Reason is required"),
  amount: Yup.number().required("Amount is required"),
});
