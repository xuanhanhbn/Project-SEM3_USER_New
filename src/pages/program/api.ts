import { AxiosResponse } from "axios";
import { RouteParams, responseProgram } from "./type";
import { Program, ProgramDetail } from "../../../src/types/global";
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

export const onGetListProgramApi = (
  params: string
): Promise<responseProgram<Program>> => {
  const url = `Program?search=${params}&isActive=false&page=0&size=10`;
  return new Promise((resolve, reject) =>
    baseApiAuth
      .get(url)
      .then((res: any) => resolve(res))
      .catch((err: Error) => reject(err))
  );
};
