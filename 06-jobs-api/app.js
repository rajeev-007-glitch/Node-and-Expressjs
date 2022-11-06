require("dotenv").config()
require("express-async-errors")

// Security Imports
const helmet = require("helmet")
const cors = require("cors")
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
app.set("trust proxy", 1)
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(
  rateLimiter({
    windowsMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP for only 100 requests per 15 minutes
  })
)
// app.use(express.static('./public'))

// routes
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", authenticateUser, jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

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
