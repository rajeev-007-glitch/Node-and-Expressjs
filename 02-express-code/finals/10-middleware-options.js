const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger-the-middleware')
const authorizer = require('./authorizer-the-middleware')


//? logger is going to be applied to all by using use request 
app.use(morgan('tiny'))
// app.use([authorizer, logger])
// app.use(express.static('./public'))


//* only gonna apply to pages associated with /api
//* app.use('/api', logger)

app.get('/', (req, res)=>{
    res.send('Home')
})

//* only gonna apply to those who are below it not going to apply to waht is above it like home will be left untouched
//* app.use(logger)]

app.get('/about', (req, res)=>{
    res.send('About')
})

app.get('/api/products', (req, res)=>{
    res.send('Products')
})

app.get('/api/reviews', (req, res)=>{
    res.send('Reviews')
})

app.listen(5000, ()=>{
    console.log('App is listining to port 5000...')
})