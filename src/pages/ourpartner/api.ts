import baseApiAuth from "utils/baseApiAuth";
import { Partner, PartnerDetail } from "types/global";
import { RouterParams, responsePartnersList } from "./type";

export const onGetListPartnerApi = (): Promise<
  responsePartnersList<PartnerDetail>
> => {
  const url = "Partner?page=0&size=4";
  return new Promise((resolve, reject) =>
    baseApiAuth
      .get(url)
      .then((res: any) => resolve(res))
      .catch((err: Error) => reject(err))
  );
};

export const onGetListPartnerDetailsApi = (data:RouterParams): Promise<PartnerDetail> => {
  const url = `Partner/${data?.partnerId}`;
  return new Promise((resolve, reject) =>
    baseApiAuth
      .get(url)
      .then((res: any) => resolve(res.data))
      .catch((err: Error) => reject(err))
  );
};
