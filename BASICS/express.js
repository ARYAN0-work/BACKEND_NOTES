// why wee need express ? learn by setting a http server[see 4:03:25 to 4:15:09 for rev] = also express run with the help of node

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('user hit the server');
    res.end('home page')
})

server.listen(5000)// communication endpoint= http traffic // each and every port is assigned to do a diffrent work however in devlopment you can use that =>bank example => in deployment you will learn about that more clearly

//without res.end you will get a buffer when you search for this site