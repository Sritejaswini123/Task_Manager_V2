import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import adminRoute from './routes/adminRoute.js';
const app = new Hono();
app.route('/', adminRoute);
serve({
    fetch: app.fetch,
    port: 3000
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
