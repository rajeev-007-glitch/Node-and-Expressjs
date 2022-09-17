require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const router = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const { application } = require('express')

//*Middleware
app.use(express.json())


//*routes

app.get('/', (req, res)=>{
    res.send('<h1>Store API</h1> <a href="/api/v1/products">Product route</a>')
})

app.use('/api/v1/products', router)

//*products routes

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 5000
      
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`App is listning on port ${port}...`))
    } catch (error) {
        console.log(error)              
    }
}

start()