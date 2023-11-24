import { Injectable } from '@nestjs/common';
import { Connection, RowDataPacket } from 'mysql2/promise';
import { DatabaseService } from '../mysql.service';

@Injectable()
export class MysqlUsersRepository {
  constructor(private readonly dbService: DatabaseService) {}

  async getAllUsers(): Promise<any[]> {
    const connection = await this.dbService.getConnection() as Connection;
    const [rows] = await connection.query('SELECT * FROM users') as unknown as [RowDataPacket[]];
    return rows;
  }

  // Adicione outros métodos conforme necessário...
}