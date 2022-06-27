import { Controller, Get, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  IInspectionsTotalNumberGetResponseDTO,
  IPendingSubscriptionsNumberGetResponseDTO,
  ISprayersTotalNumberGetResponseDTO,
  ITodaysInspectionsTotalNumberGetResponseDTO,
} from '../dto/widgets.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { WidgetsService } from '../services/widgets.service';

@Controller('widgets')
export class WidgetsController {
  constructor(
    private configService: ConfigService,
    private widgetsService: WidgetsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/totalInspectionsNumber')
  async totalInspectionsNumber(): Promise<IInspectionsTotalNumberGetResponseDTO> {
    return {
      totalNumber: await this.widgetsService.getTotalInspectionsNumber(),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/totalTodaysInspectionsNumber')
  async totalTodaysInspectionsNumber(): Promise<ITodaysInspectionsTotalNumberGetResponseDTO> {
    return {
      totalNumber: await this.widgetsService.getTotalTodaysInspectionsNumber(),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/totalSprayersNumber')
  async totalSprayersNumber(): Promise<ISprayersTotalNumberGetResponseDTO> {
    return {
      totalNumber: await this.widgetsService.getTotalSprayersNumber(),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/pendingSubscriptionsNumber')
  async pendingSubscriptionsNumber(): Promise<IPendingSubscriptionsNumberGetResponseDTO> {
    return {
      pendingSubscriptions:
        await this.widgetsService.getPendingSubscriptionsNumber(),
    };
  }
}
