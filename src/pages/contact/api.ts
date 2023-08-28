import axiosClient from 'utils/baseApiNoAuth';
import { requestContact, responseContact } from './type';

const getContactDataApi = { contact(data: requestContact): Promise<responseContact> {
    const url = '/students';
    return axiosClient.post(url, data);
  },
};

export default getContactDataApi;
