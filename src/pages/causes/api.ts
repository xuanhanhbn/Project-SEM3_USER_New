import axiosClient from "utils/baseApiNoAuth";
import { responseCausesList, responseDataCausesList } from "pages/causes/type";

const getCausesDataApi = {
  getCauses(): Promise<responseCausesList<responseDataCausesList>> {
    const url = "/program";
    return axiosClient.get(url);
  },
};

export default getCausesDataApi;
