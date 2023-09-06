export interface responseForgotPassword {
  token: string;
  status: number;
}

export interface requestForgotPassword {
  email: string;
}
