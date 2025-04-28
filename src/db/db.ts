import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema.js';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import * as fs from 'fs';  
dotenv.config(); 
const pool = new Pool({

      host: process.env.DB_HOST!,
      port: Number(process.env.DB_PORT!),
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_NAME!,
      ssl: {   
        rejectUnauthorized: true, 
        ca: fs.readFileSync("./ca.pem").toString(),
      },
});
export const db = drizzle(pool, { schema });
// export const db = drizzle(pool, { schema: userSchema });
