import { INestApplication, Injectable, Inject } from '@nestjs/common';
import { Connection } from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly connection: Connection,
  ) {}

  async getConnection(): Promise<Connection> {
    return this.connection;
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await this.closeConnection();
      await app.close();
    });

    process.on('SIGINT', async () => {
      await this.closeConnection();
      process.exit();
    });

    process.on('SIGTERM', async () => {
      await this.closeConnection();
      process.exit();
    });
  }

  async closeConnection() {
    if (this.connection) {
      await this.connection.end();
    }
  }

  // Adicione outros métodos conforme necessário...
}