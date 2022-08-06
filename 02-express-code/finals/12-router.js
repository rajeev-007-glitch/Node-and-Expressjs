const express = require('express')
const app = express()
const people = require('./routes/people')
const logger = require('./routes/auth')

// Static assets
app.use(express.static('./methods-public'))
// Parse Form data
app.use(express.urlencoded({ extended: false }))
// Parse json
app.use(express.json())
//using routing for /api/people
app.use('/api/people', people)
//Using routing for /login
app.use('/login', logger)

app.listen(5000, () => {
    console.log('App is listening at port 5000...')
})