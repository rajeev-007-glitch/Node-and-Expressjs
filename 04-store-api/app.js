require('dotenv').config()
//* async errors

const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("Yes App can now get '/' ")
})

app.listen(5000, ()=>{
    console.log('App is listning on port 5000...')
})