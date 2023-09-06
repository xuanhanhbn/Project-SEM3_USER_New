import baseApiAuth from 'utils/baseApiAuth';
import { Program } from 'types/global';
import { responseProgram } from './type';

export const onGetListProgramApi = (): Promise<responseProgram<Program>> => {
    const url = "Program?page=0&size=4";
    return new Promise((resolve, reject) =>
    baseApiAuth
        .get(url)
        .then((res: any) => resolve(res))
        .catch((err: Error) => reject(err))
    );
  };



