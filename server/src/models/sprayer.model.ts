import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Model } from 'mongoose';
import { IPassword } from '../interfaces';
import { UserRole } from './users.model';

export interface ISrayerCustomer {
  customerID: string;
  ownershipPercentage: number;
  isMainOwner: boolean;
}

export enum SprayerMovementType {
  trailing = 'Συρόμενος',
  attached = 'Αναρτώμενος',
  automatic = 'Αυτοκινούμενος',
}

export interface INozzle {
  flow: number;
}
export interface IInjector {
  nozzles: INozzle[];
}
export interface IBranch {
  injectors: IInjector[];
}

@Schema()
export class Sprayer {
  @Prop({ required: true })
  userID: string;
  @Prop({ required: true })
  customers: ISrayerCustomer[];
  @Prop({ required: true })
  categoryID: string;
  @Prop({ required: true })
  movementType: SprayerMovementType;
  @Prop()
  manufacturer: string;
  @Prop()
  commercialName: string;
  @Prop({ required: true })
  serialNumber: string;
  @Prop({ required: true })
  region: string;
  @Prop()
  age: number;
  @Prop()
  ceCompliance: boolean;
  @Prop({ required: true })
  tanksNumber: number;
  @Prop({ required: true })
  totalTanksCapacity: number;
  @Prop({ required: true })
  maxPressure: number;
  @Prop({ required: true })
  branches: IBranch[];
}

export const SprayerSchema = SchemaFactory.createForClass(Sprayer);
export type SprayerDocument = Sprayer & Document;
export type SprayerModel = Model<SprayerDocument>;
