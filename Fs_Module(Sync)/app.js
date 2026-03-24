// now we have an option of interacting with file system and the name of the module is fs now essentially there are two flavours when it comes to file module we can do assynchronsly[non-blocking] or synchrosly[blocking]

/////////// DIFFRENT METHOD HOW TO ACCESS method we just destructure them out of the fs module

// 1. const {readFileSync} = require('fs');
// 2. const fs = require('fs');
// 3. fs.read // => it will show the option readFile Sync

const {readFileSync, writeFileSync}= require("fs") // now we destructure both now i am gonna setup both of them
 

// after manipulating content lets see how we can read from file system
const first = readFileSync('./content/first.txt', 'utf8') // its a method so we need to provide two parameter and a path to that specfic path as well as what is the encoding so the node knows how to decode file => just go with utf8s as 2nd parameter
const second =readFileSync('./content/second.txt', 'utf8')

console.log(first,second);

