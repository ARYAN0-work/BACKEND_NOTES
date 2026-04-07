const express = require('express')
const app =express()

app.get('/',()=>{// get = read data = what user is trying to do
    console.log('user hit the resource');
    
    res.send('Home page')
})// i nedd twoi things a path so what resouce user is trying to access and it would make sense if we would start with root correct and then and 2nd thing is callback fn= this callback fn will get invoked every time as user is performing get requesyt on our route so basically on our dfomain and the this callbacjk fn gets same with 2 arguments


// use of network tab

//## about page 
app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

// 404 page
app.all('*',(req,res)=>{// altering default 404 and setting up our own 404= bcz user can do multiple things on a server
    res.status(404).send('<h1>resource not found</h1>')// first is path and 2nd one is callback fn=> we also added stause code make sense it will not return 200
})
app.listen(5000,()=>{// port we are listenkng on
    console.log('server is listening on port 5000....');
    
})

// by default all browser perform a get request


//app.post
//app.get
//app.put
//app.delete
//app.all - it works with all of them
//app.use
//app.listen  => same as in http module