import { Module } from '@nestjs/common';
import { DatabaseService } from './mysql.service';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}