export interface responseLogin {
  token: string;
  status: number;
}


export interface requestLogin {
  userName: string;
  password: string;
}