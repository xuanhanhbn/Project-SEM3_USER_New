import { requestRegister, responseRegister } from "./type";
import baseApiAuth from 'utils/baseApiAuth';
import { AxiosResponse } from 'axios';


export const registerApi = (data:requestRegister): Promise<responseRegister> => {
  const url = '/User/register'
  return new Promise((resolve, reject) =>
  baseApiAuth
      .post(url,data)
      .then((res: AxiosResponse) => resolve(res?.data))
      .catch((err: Error) => reject(err))
  );
};
