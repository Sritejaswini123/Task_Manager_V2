import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import projectRoutes from './routes/projectRoutes'



const app = new Hono()

app.route('/',projectRoutes)


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
 
export default projectRoutes;