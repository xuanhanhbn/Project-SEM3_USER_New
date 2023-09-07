export interface responseRegister {
  token: string;
  validTo: string;
}

export interface requestRegister {
    userName: string;
    password: string;
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
}
