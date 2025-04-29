import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import adminRoute from './routes/adminRoute.js'
import { authMiddleware } from './middlewares/authMiddleware.js'

const app = new Hono()
app.route('/', adminRoute)
// app.route('/',taskRoute)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
