import { Module } from '@nestjs/common';
import { databaseProvider  } from './database.provider';

@Module({
  providers: [databaseProvider],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}