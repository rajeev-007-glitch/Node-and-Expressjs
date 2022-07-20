const http = require('http')
const {readFileSync} = require('fs')

// Get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res)=>{
    console.log('User hit the server')
    if(req.url === "/"){
        res.writeHead(200, {'content-type': 'text/html' })
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    else if(req.url === "/about"){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>The page you are looking for looks like it dosent exist or having error finding it...</h1>')
        res.end()
    }
})


server.listen(5000)