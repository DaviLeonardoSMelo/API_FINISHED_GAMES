import { Module } from '@nestjs/common';
import { MysqlUsersRepository } from './mysql/repositories/mysql-users-repository';
import { DatabaseService } from './mysql/mysql.service';

@Module({
  providers: [MysqlUsersRepository, DatabaseService],
  exports: [MysqlUsersRepository],
})
export class MysqlModule {}