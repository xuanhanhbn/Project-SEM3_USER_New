import baseApiAuth from 'utils/baseApiAuth';

import { RouteParams,  } from "pages/causes/type";
import { ProgramDetail } from "types/global";
import { AxiosResponse } from 'axios';


export const getProgramDetails = (data:RouteParams): Promise<ProgramDetail> => {
  const url = `/Program/${data.programId}`;
  return new Promise((resolve, reject) =>
  baseApiAuth
      .get(url)
      .then((res:AxiosResponse) => resolve(res.data))
      .catch((err: Error) => reject(err))
  );
};


