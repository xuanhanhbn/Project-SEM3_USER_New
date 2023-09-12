export interface responseCausesList<T> {
  data: T[];
  status: number;
}

export interface responseProgramDetail<T> {
  status: number;
}

export interface RouteParams {
  programId: string;
}

export interface responseDataCausesList {
  id: string;
}

export interface responseProgram<T> {
  status: number;
  data: {
    data:T[],
    page:number,
    size:number,
    total:number
  };
}
