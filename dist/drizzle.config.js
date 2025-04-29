//drizzle .config.ts
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import * as fs from 'fs';
export default defineConfig({
    out: './migrations',
    schema: './src/db/*',
    dialect: 'postgresql',
    dbCredentials: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: {
            rejectUnauthorized: true,
            ca: fs.readFileSync("./ca.pem").toString(),
        },
    },
});
