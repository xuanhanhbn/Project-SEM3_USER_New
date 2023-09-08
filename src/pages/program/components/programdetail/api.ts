// import baseApiNoAuth from 'utils/baseApiNoAuth';
import { requestDonation, responseDonation } from "./type";
import baseApiAuth from "utils/baseApiAuth";
import baseApiDefault from "utils/baseApi";
import { AxiosResponse } from "axios";

export const onPaymentApi = (
  data: requestDonation
): Promise<responseDonation> => {
  const url = "/Payment/create";
  return new Promise((resolve, reject) =>
    baseApiAuth
      .post(url, data)
      .then((res: any) => resolve(res))
      .catch((err: Error) => reject(err))
  );
};
