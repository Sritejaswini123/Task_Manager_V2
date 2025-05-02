import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import projectRoutes from './routes/projectRoutes'
import { userRoutes } from './routes/userRoutes'
import { taskRoutes } from './routes/taskRoutes'
const app = new Hono()
app.route('/',userRoutes)
app.route('/', projectRoutes)
app.route('/', taskRoutes)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
