import { Module } from '@nestjs/common';
import { SendNotification } from '@application/useCases/SendNotification';
import { Databasemodule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [Databasemodule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
