import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Model } from 'mongoose';
import { IPassword } from '../interfaces';

export enum UserRole {
  Admin,
  Consumer,
}
@Schema()
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  username: string;
  @Prop({ type: Object, required: true })
  password: IPassword;
  @Prop({ required: true })
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
export type UserModel = Model<UserDocument>;
