import axiosClient from "utils/baseApiNoAuth";
import { requestRegister, responseRegister } from "./type";

const getLoginDataApi = {
  login(data: requestRegister): Promise<responseRegister> {
    const url = "/user/register";
    return axiosClient.post(url, data);
  },
};

export default getLoginDataApi;
