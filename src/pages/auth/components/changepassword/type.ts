export interface responseChangePassword {
  token: string;
  status: number;
}

export interface requestChangePassword {
  password: string;
  newPassword: string;
  confirmPassword: string;
}
