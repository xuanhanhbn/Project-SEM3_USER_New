import { AxiosResponse } from "axios";
import { RouteParams } from "./type";
import { ProgramDetail } from "../../../src/types/global";
import baseApiAuth from "../../utils/baseApiAuth";

export const getProgramDetails = (
  data: RouteParams
): Promise<ProgramDetail> => {
  const url = `/Program/${data.programId}`;
  return new Promise((resolve, reject) =>
    baseApiAuth
      .get(url)
      .then((res: AxiosResponse) => resolve(res.data))
      .catch((err: Error) => reject(err))
  );
};
