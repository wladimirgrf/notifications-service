import { SendNotification } from '@application/useCases/SendNotification';
import { Databasemodule } from '@infra/database/database.module';
import { NotificationsController } from './kafka/controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/kafkaConsumer.service';

@Module({
  imports: [Databasemodule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}
