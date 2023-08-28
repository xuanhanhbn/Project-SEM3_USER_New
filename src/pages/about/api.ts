import axiosClient from 'utils/baseApiNoAuth';
import { responseAboutList, responseDataAboutList } from 'pages/about/type';

const getAboutDataApi = { getAbout(): Promise<responseAboutList<responseDataAboutList>> {
    const url = '/students';
    return axiosClient.get(url,);
  },
};

export default getAboutDataApi;
