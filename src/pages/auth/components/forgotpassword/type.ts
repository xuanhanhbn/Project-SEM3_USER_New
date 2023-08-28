export interface responseForgotPassword {
  token: string;
  status: number;
}

export interface requestForgotPassword {
  userName: string;
  newPassword: string;
  email: string;
  confirmPassword: string;
}
