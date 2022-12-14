import { Module } from '@nestjs/common';

import { Databasemodule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, Databasemodule],
})
export class AppModule {}
