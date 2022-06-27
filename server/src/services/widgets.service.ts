import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Subscriber } from 'rxjs';
import { Inspection, InspectionModel } from '../models/inspections.model';
import { Sprayer, SprayerModel } from '../models/sprayer.model';
import { SubscriberModel } from '../models/subscribers.model';
import {
  getDateAsMongooseQueryFilter,
  transformDateToPreviousYear,
} from '../utils';

@Injectable()
export class WidgetsService {
  constructor(
    @InjectModel(Inspection.name, 'main')
    private inspectionModel: InspectionModel,
    @InjectModel(Sprayer.name, 'main')
    private sprayerModel: SprayerModel,
    @InjectModel(Subscriber.name, 'main')
    private subscriberModel: SubscriberModel,
  ) {}

  async getTotalSprayersNumber(): Promise<number> {
    return await this.sprayerModel.find().count();
  }

  async getTotalInspectionsNumber(): Promise<number> {
    return await this.inspectionModel.find().count();
  }

  async getTotalTodaysInspectionsNumber(): Promise<number> {
    const dateFilter = getDateAsMongooseQueryFilter(Date.now());
    return await this.inspectionModel
      .find({
        date: {
          $gte: dateFilter.gte,
          $lt: dateFilter.lt,
        },
      })
      .count();
  }

  async getPendingSubscriptionsNumber(): Promise<number> {
    const dateFilter = getDateAsMongooseQueryFilter(Date.now());
    return await this.subscriberModel
      .find({
        subscription: {
          $lt: transformDateToPreviousYear(dateFilter.lt),
        },
        paid: false,
      })
      .count();
  }
}
