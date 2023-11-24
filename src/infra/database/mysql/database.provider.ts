import { createConnection } from 'mysql2/promise';
import { Provider } from '@nestjs/common';

export const databaseProvider: Provider = {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
        host: process.env.DATABASE_URL ||'localhost',
        user: process.env.DB_USER || 'root',
        password:process.env.DB_PASSWORD || '123456',
        database:process.env.DB_SCHEMA || 'gpdb',
    }),
};