import Koa from 'koa'
import 'dotenv/config'
import bodyParser from 'koa-bodyparser'
import errorHandler from './middlewares/errorHandler.js'
import studentRoutes from "./routes/routes.js"


const app= new Koa()
const port= process.env.PORT

app.use(errorHandler)
app.use(bodyParser());

app.use(studentRoutes.routes())
app.use(studentRoutes.allowedMethods());

app.listen(port,()=>{
console.log(`Listening in http://localhost:${port}`)
})