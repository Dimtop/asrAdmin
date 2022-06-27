import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Model } from 'mongoose';

export enum StationType {
  fixed = 'fixed',
  moving = 'moving',
}

@Schema()
export class Subscriber {
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  IDNumber: string;
  @Prop({ required: true })
  name: string;
  @Prop()
  field: string;
  @Prop({ required: true })
  region: string;
  @Prop()
  stationType: StationType;
  @Prop({ required: true })
  address: string;
  @Prop()
  city: string;
  @Prop()
  zipCode: string;
  @Prop({ required: true })
  AFM: string;
  @Prop()
  DOI: string;
  @Prop()
  phone: string;
  @Prop()
  email: string;
  @Prop({ required: true })
  inspector: string;
  @Prop()
  sticker: string;
  @Prop()
  logo: string;
  @Prop({ required: true })
  subscription: Date;
  @Prop({ required: true })
  paid: boolean;
}

export const SubscriberSchema = SchemaFactory.createForClass(Subscriber);
export type SubscriberDocument = Subscriber & Document;
export type SubscriberModel = Model<SubscriberDocument>;
