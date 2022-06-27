import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Subscriber } from 'rxjs';
import { ISubscriberGetDTO } from '../dto/subscriber.dto';
import { StationType, SubscriberModel } from '../models/subscribers.model';

@Injectable()
export class SubscribersService {
  constructor(
    @InjectModel(Subscriber.name, 'main')
    private subscriberModel: SubscriberModel,
  ) {}

  async getAll(): Promise<ISubscriberGetDTO[]> {
    return await (
      await this.subscriberModel.find()
    ).map((subscriber) => {
      return {
        username: subscriber.username,
        IDNumber: subscriber.IDNumber,
        name: subscriber.name,
        field: subscriber.field,
        region: subscriber.region,
        stationType: subscriber.stationType,
        address: subscriber.address,
        city: subscriber.city,
        zipCode: subscriber.zipCode,
        AFM: subscriber.AFM,
        DOI: subscriber.DOI,
        phone: subscriber.phone,
        email: subscriber.email,
        inspector: subscriber.inspector,
        sticker: subscriber.sticker,
        logo: subscriber.logo,
        subscription: subscriber.subscription,
        paid: subscriber.paid,
      };
    });
  }
}
