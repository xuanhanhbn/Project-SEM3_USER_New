export interface responsePartnersList<T> {
  status: number;
  data: T[] | [];
}

export interface RouterParams {
  partnerId:string
}
