import { createConnection } from 'mysql2/promise';
import { Provider } from '@nestjs/common';

export const databaseProvider: Provider = {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
        host: process.env.DATABASE_URL,
        user: process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_SCHEMA,
    }),
};