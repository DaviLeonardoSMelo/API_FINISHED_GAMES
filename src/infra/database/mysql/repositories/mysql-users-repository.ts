import { Injectable } from '@nestjs/common';
import { User, RowDataPacket } from 'mysql2/promise'; 
import { User as RawUser } from 'node_modules/mysql2';
import { DatabaseService } from '../mysql.service';
import { MysqlUserMapper } from '../mappers/mysql-users-mapper';

@Injectable()
export class MysqlUsersRepository {
  constructor(private readonly dbService: DatabaseService) {}

  async getAllUsers(userId: string): Promise<User | null> {
    const connection = await this.dbService.getConnection();
    
    const [result] = await connection.query<RowDataPacket[]>('SELECT * FROM users WHERE userId = ?', userId);

    if (result.length === 0) {
      return null; 
    }

    const rawUser: RawUser = result[0] as RawUser;

    return MysqlUserMapper.toDomain(rawUser);
  }
}