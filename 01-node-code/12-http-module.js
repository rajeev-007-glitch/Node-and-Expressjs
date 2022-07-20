const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome! This is our home page...')
    }
    if(req.url === '/about'){
        res.end('This is our about page here you will find about us')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>Can't find what you are looking for</p>
        <a href = '/'>You can check out our home page here</a>
    `)
})

server.listen(8080)