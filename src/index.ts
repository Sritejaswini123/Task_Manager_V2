import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import adminRoute from './routes/adminRoute.js'
import {taskRoutes} from './routes/taskRoutes.js'

const app = new Hono()
app.route('/', adminRoute)
app.route('./task', taskRoutes)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
