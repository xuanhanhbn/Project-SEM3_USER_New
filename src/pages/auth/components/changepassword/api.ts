import axiosClient from "utils/baseApiNoAuth";
import { requestChangePassword, responseChangePassword } from "./type";

const getChangePasswordDataApi = {
  changePassword(data: requestChangePassword): Promise<responseChangePassword> {
    const url = "/students";
    return axiosClient.post(url, data);
  },
};

export default getChangePasswordDataApi;
