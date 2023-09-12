export interface responsePartnersList<T> {
  status: number;
  data: {
    data:T[],
    page:number,
    size:number,
    total:number
  }
}

export interface RouterParams {
  partnerId:string
}
