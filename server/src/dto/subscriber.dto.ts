import { StationType } from '../models/subscribers.model';

export interface ISubscriberGetDTO {
  username: string;
  IDNumber: string;
  name: string;
  field: string;
  region: string;
  stationType: StationType;
  address: string;
  city: string;
  zipCode: string;
  AFM: string;
  DOI: string;
  phone: string;
  email: string;
  inspector: string;
  sticker: string;
  logo: string;
  subscription: Date;
  paid: boolean;
}
