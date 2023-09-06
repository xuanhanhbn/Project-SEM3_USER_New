import baseApiAuth from "utils/baseApiAuth";
import { Partner } from "types/global";
import { responsePartnersList } from "./type";

export const onGetListPartnerApi = (): Promise<
  responsePartnersList<Partner>
> => {
  const url = "Partner?page=0&size=4";
  return new Promise((resolve, reject) =>
    baseApiAuth
      .get(url)
      .then((res: any) => resolve(res))
      .catch((err: Error) => reject(err))
  );
};
