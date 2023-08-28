import axiosClient from "utils/baseApiNoAuth";
import {
  responseDataPartnersList,
  responsePartnersList,
} from "pages/ourpartner/type";

const getPartnerDataApi = {
  getPartner(): Promise<responsePartnersList<responseDataPartnersList>> {
    const url = "/partner";
    return axiosClient.get(url);
  },
};

export default getPartnerDataApi;
