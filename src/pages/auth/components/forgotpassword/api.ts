import axiosClient from "utils/baseApiNoAuth";
import { requestForgotPassword, responseForgotPassword } from "./type";

const getForgotPasswordDataApi = {
  forgotPassword(data: requestForgotPassword): Promise<responseForgotPassword> {
    const url = "/students";
    return axiosClient.post(url, data);
  },
};

export default getForgotPasswordDataApi;
