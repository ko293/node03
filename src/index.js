const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    //console.log(url)
    switch (url){
        case '/':
            res.end('<h1>Home Page</h1>')
            break;
        case '/about':
            res.end('<h1>About Page</h1>')
            break;
        case '/contact':
            res.end('<h1>Contact Page</h1>')
            break;    
        default:
            res.end('<h1>Page Not Found</h1>')
            break;
    }
    //res.end('<h1>Hello Ko</h1>')
})

//server.listen(3000)
const port = process.env.PORT || 3000
server.listen(port)