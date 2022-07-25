const http = require('http')
const {readFileSync} = require('fs')

// Get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
    // console.log('User hit the server')

    //Homepage
    if(req.url === "/"){
        res.writeHead(200, {'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    // Styles
    else if(req.url === "/styles.css"){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    // Logo
    else if(req.url === "/logo.svg"){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeLogo)
        res.end()
    }
    // Logic
    else if(req.url === "/browser-app.js"){
        res.writeHead(200, {'content-type': 'text/js'})
        res.write(homeLogic)
        res.end()
    }
    // 404
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>The page you are looking for looks like it dosent exist or having error finding it...</h1>')
        res.end()
    }
})


server.listen(5000)