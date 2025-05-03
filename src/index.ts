import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import projectRoutes from './routes/projectRoutes'
import { userRoutes } from './routes/userRoutes'
import { taskRoutes } from './routes/taskRoutes'
import { userProjectRoutes } from './routes/user-ProjectRoutes'
import { projectTaskRoute } from './routes/project-taskRoutes'
const app = new Hono()
app.route('/',userRoutes)
app.route('/', projectRoutes)
app.route('/', taskRoutes)
app.route('/api', userProjectRoutes)
app.route('/api',projectTaskRoute )

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
