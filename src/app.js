const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const authRouter = require(path.join(__dirname,'routers','authRouter.js'))
const taskRouter = require(path.join(__dirname,'routers','taskRouter.js'))

app.use(express.json())
app.use(cors())

app.use('/v1/auth',authRouter)
app.use('/v1/task',taskRouter)


module.exports = app   