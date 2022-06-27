import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  appConfig,
  databaseConfig,
  encryptionConfig,
  authConfig,
} from '../config';
import { UsersModule } from './users.module';
import { ResponseInterceptor } from '../interceptors/response.interceptor';
import { AuthModule } from './auth.module';
import { WidgetsModule } from './widgets.module';
import { SubscribersModule } from './subscribers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, encryptionConfig, authConfig],
    }),
    MongooseModule.forRoot(process.env.ADMIN_DB_URI, {
      connectionName: 'admin',
    }),
    MongooseModule.forRoot(process.env.MAIN_DB_URI, {
      connectionName: 'main',
    }),
    UsersModule,
    AuthModule,
    WidgetsModule,
    SubscribersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
