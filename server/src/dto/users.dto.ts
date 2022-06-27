import { IsEmail } from 'class-validator';
import { ObjectId } from 'mongoose';
import { IEncryptedTextData } from '../interfaces';
import { UserRole } from '../models/users.model';

export class UsersPostBodyDTO {
  username: string;
  password: IEncryptedTextData & string;
  role: UserRole;
}

export interface UsersPostResponseDTO {
  id: ObjectId;
}

export interface IUserLoginReponseDTO {
  accessToken: string;
  id: string;
}

export interface IUserGetDTO {
  id: string;
  username: string;
  name: string;
  role: UserRole;
}
