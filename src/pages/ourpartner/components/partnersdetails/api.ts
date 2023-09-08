import baseApiAuth from "utils/baseApiAuth";
import { PartnerDetail } from "types/global";
import { responsePartnerDetail } from "./type";

export const onGetPartnerDetailApi = (
  data: string
): Promise<responsePartnerDetail<PartnerDetail>> => {
  const url = `/Partner/${data}`;
  return new Promise((resolve, reject) =>
    baseApiAuth
      .get(url)
      .then((res: any) => resolve(res))
      .catch((err: Error) => reject(err))
  );
};
