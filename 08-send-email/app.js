require('dotenv').config
require('express-async-errors')

const express = require('express')
const app = express()

const sendMail = require('./controllers/sendEmail')

app.use(express.json())

app.get('/', (req,res)=>{
  res.send(`<h1>Email Project<h1> <a href="/send">send email</a>`)
})

app.get('/send', sendMail)

const port = process.env.PORT || 3000

const start = async()=>{
  try {
    app.listen(port, ()=>{
      console.log(`App is listening on port ${port}`)
    })
  } catch (error) {
      console.log(error)  
  }
}

start()