import baseApiAuth from 'utils/baseApiAuth';
import { Program } from 'types/global';
import { AxiosResponse } from 'axios';
import { dataCheckPayment, requestCheckPayment, responseCheckPayment } from './type';

export const onCheckPaymentApi = (data:requestCheckPayment): Promise<dataCheckPayment> => {
    const url = `Payment/capture/${data?.donationId}`;
    return new Promise((resolve, reject) =>
    baseApiAuth
        .post(url,{})
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((err: Error) => reject(err))
    );
  };



