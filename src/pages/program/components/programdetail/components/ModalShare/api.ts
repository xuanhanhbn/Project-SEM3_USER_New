// import baseApiNoAuth from 'utils/baseApiNoAuth';
import baseApiAuth from "utils/baseApiAuth";
import { AxiosResponse } from "axios";
import { requestInput, responseShare } from "./type";

export const onShareApi = (data: any): Promise<responseShare> => {
  const {email} = data
  const payload = {email:[...email]}

  const url = `/Program/share/${data?.programId}`;
  return new Promise((resolve, reject) =>
    baseApiAuth
      .post(url, payload)
      .then((res: AxiosResponse) => resolve(res.data))
      .catch((err: Error) => reject(err))
  );
};
