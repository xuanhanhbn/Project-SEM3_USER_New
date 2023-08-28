import axiosClient from 'utils/baseApiNoAuth';
import { requestLogin, responseLogin } from './type';

const getLoginDataApi = { login(data: requestLogin): Promise<responseLogin> {
    const url = '/students';
    return axiosClient.post(url, data);
  },
};

export default getLoginDataApi;
