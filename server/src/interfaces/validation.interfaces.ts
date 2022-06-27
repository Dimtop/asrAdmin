import { UserDocument, UserModel } from '../models/users.model';

export interface IUserValidationData {
  user?: UserDocument;
  isValid: boolean;
  message: string;
}
