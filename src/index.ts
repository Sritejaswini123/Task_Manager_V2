import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { userRoutes } from './routes/userRoutes'

const app = new Hono()

app.route('/',userRoutes)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
