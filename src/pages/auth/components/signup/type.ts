export interface responseRegister {
  data: string;
  status: number;
}

export interface requestRegister {
    userName: string;
    password: string;
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
}
