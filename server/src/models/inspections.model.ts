import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Model } from 'mongoose';
import { IPassword } from '../interfaces';
import { UserRole } from './users.model';

export enum InspectionType {
  INITIAL = 'initial',
  THREE_YEAR = 'threeyear',
}

export enum InspectionResult {
  CategoryOne,
  CategorTwo,
  CategoryThree,
  CategoryFour,
}

@Schema()
export class Inspection {
  @Prop({ required: true })
  userID: string;
  @Prop({ required: true })
  preInspectionID: string;
  @Prop({ type: Object, required: true })
  technicalReport: IPassword;
  @Prop({ type: Object, required: true })
  measurements: UserRole;
  @Prop({ required: true })
  date: Date;
  @Prop({ required: true })
  type: InspectionType;
  @Prop({ required: true })
  inpsectionNumber: string;
  @Prop({ required: true })
  stickerNumber: string;
  @Prop()
  inadequateCategory: boolean;
  @Prop()
  forcePerfect: boolean;
  @Prop({ required: true })
  result: InspectionResult;
}

export const InspectionSchema = SchemaFactory.createForClass(Inspection);
export type InspectionDocument = Inspection & Document;
export type InspectionModel = Model<InspectionDocument>;
