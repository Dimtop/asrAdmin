import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscribersController } from '../controllers/subscribers.controller';
import { Subscriber, SubscriberSchema } from '../models/subscribers.model';
import { SubscribersService } from '../services/subscribers.service';

@Module({
  imports: [
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
  controllers: [SubscribersController],
  providers: [SubscribersService],
  exports: [SubscribersService],
})
export class SubscribersModule {}
