import type { ComponentType } from "react";

export type {
  ISendOTP,
  ILogin,
  IRegister,
  IRegisterData,
  IVerifyOTP,
} from "./auth.type";

export type { IDivision } from "./division.type";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "ADMIN" | "USER" | "GUIDE" | "SUPER_ADMIN";
