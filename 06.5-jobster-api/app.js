require("dotenv").config()
require("express-async-errors")

// Security Imports
const path = require('path')
const helmet = require("helmet")
const xss = require("xss-clean")
const rateLimiter = require("express-rate-limit")

const express = require("express")
const app = express()

// connect DB
const connectDb = require("./db/connect")
// routers
const authRouter = require("./routes/auth")
const jobsRouter = require("./routes/jobs")

// error handler
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")
const authenticateUser = require("./middleware/authentication")

// extra packages
app.use(express.static(path.resolve(__dirname, './client/build')))
app.use(express.json())
app.use(helmet())
app.use(xss())
// app.use(express.static('./public'))

// routes
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", authenticateUser, jobsRouter)

// serve index.html
app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

app.set('trust proxy', 1);

app.use(express.static(path.resolve(__dirname, './client/build')));

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    console.log("Connected to DB...")
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
