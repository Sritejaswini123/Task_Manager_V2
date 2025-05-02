import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import projectRoutes from './routes/projectRoutes'
import loginRoutes from './routes/loginRoutes'



const app = new Hono()

app.route('/',projectRoutes)
app.route('/',loginRoutes)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
 
export default projectRoutes;