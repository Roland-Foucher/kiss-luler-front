import { UserAddIcon } from "@heroicons/react/outline";
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
  firstName?: string;
  lastName?: string;
  email?: string;
  job?: string;
  password?: string;
  role?: Role;
  subscribeDate?: string;
  birthdate?: Date;
  photo?: string;
  pseudo?: string;
}

export interface UserWithToken {
  fullUserDto: User,
  token: string
}