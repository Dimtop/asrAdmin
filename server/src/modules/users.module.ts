import { UsersService } from '../services/users.service';
import { Module } from '@nestjs/common';
import { User, UserSchema } from '../models/users.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from '../controllers/users.controller';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema, collection: 'users' }],
      'admin',
    ),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
