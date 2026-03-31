// now the problem strt if we wanted to do multiple actions if i want to read two files and then for example write one 

// SOLN => TUEN IT INTO THIS A PROMISE => AND WE WILL SETUP ASYNC AWAIT

const {readFile} = require('fs')
const { result } = require('lodash')

const getText =(path)=>{
    return new Promise((resolve,reject)=>{
readFile('../content/first.txt','utf8',(err,data)=>{
    if (err) {
        reject(err)
    } else{
       resolve(data)
    }
})
    })
} 

getText('../content/first.txt')
.then((result)=> console.log(result))
.catch((err)=> console.log(err))


// this getetxt will take path bcz it wants to read two files nd write one => make file async for much clean



/*
readFile('../content/first.txt','utf8',(err,data)=>{
    if (err) {
        return
    } else{
        console.log(data);
    }
})
    */





// now when we invoke get text it will return a promise