import baseApiAuth from 'utils/baseApiAuth';
import { Program } from 'types/global';
import { responseProgram } from './type';
import { AxiosResponse } from 'axios';

export const onGetListProgramApi = (): Promise<responseProgram<Program>> => {
    const url = "Program?isActive=false&page=0&size=4";
    return new Promise((resolve, reject) =>
    baseApiAuth
        .get(url)
        .then((res: AxiosResponse) => resolve(res))
        .catch((err: Error) => reject(err))
    );
  };



