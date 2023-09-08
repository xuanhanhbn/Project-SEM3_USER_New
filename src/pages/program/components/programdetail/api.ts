// import baseApiNoAuth from 'utils/baseApiNoAuth';
import { requestDonation, requestEnroll, responseEnroll, responsePaymentDonation } from "./type";
import baseApiAuth from "utils/baseApiAuth";
import { AxiosResponse } from "axios";

export const onPaymentApi = (
  data: requestDonation
): Promise<responsePaymentDonation> => {
  const url = "/Payment/create";
  return new Promise((resolve, reject) =>
    baseApiAuth
      .post(url, data)
      .then((res: AxiosResponse) => resolve(res.data))
      .catch((err: Error) => reject(err))
  );
};

export const onRegisterVolunteerApi = (data:requestEnroll): Promise<responseEnroll> => {
  const url = `/Program/enroll/${data?.programId}`;
  return new Promise((resolve, reject) =>
    baseApiAuth
      .put(url,{})
      .then((res: AxiosResponse) => resolve(res.data))
      .catch((err: Error) => reject(err))
  );
};
