const http = require('http');

const server = http.createServer((req,res) => {
//console.log(req)
if(req.url === '/'){
    res.end('Welcome To Homepage')
}
if(req.url==='/about'){
    res.end('Welcome To About Page')
}
res.end(
    `<h1> OOPS! </h1> 
    <p> We cant seem to find the page </p>
    <a href = '/'> Back Homme </a>`
)
})

server.listen(5000)