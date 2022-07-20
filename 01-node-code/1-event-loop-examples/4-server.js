const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('Request sent')
    res.end('Hello World')
})

server.listen(5000, ()=>{
    console.log('Server is listning to port 5000')
})