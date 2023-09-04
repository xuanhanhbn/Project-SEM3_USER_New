import baseApiDefault from 'utils/baseApi'
import { AxiosResponse } from "axios";
import { requestInput, responseInput } from './type';

export const onCheckActiveCodeApi = (data:requestInput): Promise<responseInput> => {
  const url = "/User/forgot-password";
  return new Promise((resolve, reject) =>
  baseApiDefault
      .post(url,data)
      .then((res: AxiosResponse) => resolve(res?.data))
      .catch((err: Error) => reject(err))
  );
};
