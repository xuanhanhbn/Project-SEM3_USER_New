import baseApiNoAuth from 'utils/baseApiNoAuth';
import { requestLogin, responseLogin, responseUserInfo } from './type';
import baseApiAuth from 'utils/baseApiAuth'
import baseApiDefault from 'utils/baseApi'
import { AxiosResponse } from 'axios';

export const onLoginApi = (data:requestLogin): Promise<responseLogin> => {
    const url = "User/login";
    return new Promise((resolve, reject) =>
    baseApiNoAuth
        .post(url,data)
        .then((res: any) => resolve(res))
        .catch((err: Error) => reject(err))
    );
  };

  export const getUserInfo = (): Promise<responseUserInfo> => {
    const url = "/User/me";
    return new Promise((resolve, reject) =>
    baseApiAuth
        .get(url)
        .then((res:any) => resolve(res))
        .catch((err: Error) => reject(err))
    );
  };

