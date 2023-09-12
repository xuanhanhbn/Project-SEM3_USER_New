export interface responseProgram<T> {
  status: number;
  data:{
    data:T[],
    page:number,
    size:number,
    total:number
  }
}

