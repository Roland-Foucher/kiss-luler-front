import { Role } from "./enum";

export interface LoginDTO {
  username?: string;
  password?: string;
}

export interface changePasswordDTO {
  oldPassword?: string;
  newPassword?: string;
}

export interface User {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  role?: Role;
}

