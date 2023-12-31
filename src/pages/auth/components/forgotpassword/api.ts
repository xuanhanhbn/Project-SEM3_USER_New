import { requestForgotPassword, responseForgotPassword } from "./type";
import baseApiDefault from 'utils/baseApi'
import { AxiosResponse } from "axios";

export const forgotPasswordApi = (data:requestForgotPassword): Promise<responseForgotPassword> => {
  const url = "/User/forgot-password";
  return new Promise((resolve, reject) =>
  baseApiDefault
      .post(url,data)
      .then((res: AxiosResponse) => resolve(res?.data))
      .catch((err: Error) => reject(err))
  );
};
