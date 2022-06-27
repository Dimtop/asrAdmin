import { UsersService } from '../services/users.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from '../controllers/users.controller';
import { Inspection, InspectionSchema } from '../models/inspections.model';
import { WidgetsController } from '../controllers/widgets.controller';
import { WidgetsService } from '../services/widgets.service';
import { Sprayer, SprayerSchema } from '../models/sprayer.model';
import { Subscriber } from 'rxjs';
import { SubscriberSchema } from '../models/subscribers.model';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Inspection.name,
          schema: InspectionSchema,
          collection: 'Inspections',
        },
      ],
      'main',
    ),
    MongooseModule.forFeature(
      [
        {
          name: Sprayer.name,
          schema: SprayerSchema,
          collection: 'Sprayers',
        },
      ],
      'main',
    ),
    MongooseModule.forFeature(
      [
        {
          name: Subscriber.name,
          schema: SubscriberSchema,
          collection: 'Users',
        },
      ],
      'main',
    ),
  ],
  controllers: [WidgetsController],
  providers: [WidgetsService],
  exports: [WidgetsService],
})
export class WidgetsModule {}
