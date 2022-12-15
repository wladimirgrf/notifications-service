import { Module } from '@nestjs/common';
import { SendNotification } from '@application/useCases/SendNotification';
import { Databasemodule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/useCases/CancelNotification';
import { ReadNotification } from '@application/useCases/ReadNotification';
import { UnreadNotification } from '@application/useCases/UnreadNotification';
import { GetRecipientNotifications } from '@application/useCases/GetRecipientNotifications';
import { CountRecipientNotifications } from '@application/useCases/CountRecipientNotifications';

@Module({
  imports: [Databasemodule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    GetRecipientNotifications,
    CountRecipientNotifications,
  ],
})
export class HttpModule {}
