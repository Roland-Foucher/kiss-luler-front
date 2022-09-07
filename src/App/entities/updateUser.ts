import { Role } from "./enum";

export interface UpdateUserDTO {
    firstName?: string;
    lastName?: string;
    email?: string;
    job?: string;
    birthdate?: Date;
    pseudo?: string;
  }

  export interface UpdatePasswordUSerDTO{
    oldPassword: string;
    newPassword : string;
    firstName?: string;
    lastName?: string;
    email?: string;
    job?: string;
    birthdate?: Date;
    pseudo?: string;
  }

