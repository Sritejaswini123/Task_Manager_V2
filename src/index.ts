import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import loginRoutes from './routes/loginRoute'
import projectRoutes from './routes/projectRoutes'
import { userRoutes } from './routes/userRoutes'
import userProjectRelationRoutes from './routes/userProjectRelationRoutes'

const app = new Hono()

app.route('/',userRoutes)
app.route('/', projectRoutes)
app.route('/',loginRoutes)
app.route('/',userProjectRelationRoutes)

serve({
  fetch: app.fetch,
  port: 4000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
