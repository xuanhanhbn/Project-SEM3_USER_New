export interface responseLogin {
  token: string;
  status: number;
}

export interface responseUserInfo {
  data: {
    id: string;
    email: string;
    fullName: string;
    dateOfBirth: string;
    profilePictureId: string;
    roles: string[];
  }
  status:number
}

export interface requestLogin {
  [x: string]: any;
  identifier: string;
  password: string;
}
