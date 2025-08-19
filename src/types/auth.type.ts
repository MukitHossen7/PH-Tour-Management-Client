export interface ISendOTP {
  email: string;
}

export interface IVerifyOTP {
  email: string;
  otp: string;
}
export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface Auth {
  provider: string;
  providerID: string;
}

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  isDeleted: boolean;
  isActive: string;
  isVerified: boolean;
  role: string;
  auths: Auth[];
  _id: string;
  createdAt: string;
  updatedAt: string;
}
