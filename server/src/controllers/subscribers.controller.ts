import { Controller, Get, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ISubscriberGetDTO } from '../dto/subscriber.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

import { SubscribersService } from '../services/subscribers.service';

@Controller('subscribers')
export class SubscribersController {
  constructor(
    private configService: ConfigService,
    private subscribersService: SubscribersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/all')
  async getAll(): Promise<ISubscriberGetDTO[]> {
    return await this.subscribersService.getAll();
  }
}
