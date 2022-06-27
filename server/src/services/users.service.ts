import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel, User, UserDocument } from '../models/users.model';
import { encrypt, decrypt } from '../utils';
import {
  IUserGetDTO,
  IUserLoginReponseDTO,
  UsersPostBodyDTO,
  UsersPostResponseDTO,
} from '../dto/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name, 'admin') private userModel: UserModel) {}

  async create(
    usersPostBodyDto: UsersPostBodyDTO,
  ): Promise<UsersPostResponseDTO> {
    const newUser = await this.userModel.create({
      username: usersPostBodyDto.username,
      password: {
        buffer: usersPostBodyDto.password.encryptedTextString,
        iv: usersPostBodyDto.password.iv,
      },
      role: usersPostBodyDto.role,
    });
    return { id: newUser._id };
  }

  async findOne(username: string): Promise<UserDocument> {
    return await this.userModel.findOne({ username });
  }

  async getUserById(id: string): Promise<IUserGetDTO> {
    const user = await this.userModel.findById(id);
    return {
      id: user._id.toString(),
      username: user.username,
      name: user.name,
      role: user.role,
    };
  }
}
