export interface responseContact {
  token: string;
  status: number;
}

export interface requestContact {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}
