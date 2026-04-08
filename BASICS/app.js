const express = require('express')
const path = require('path')// for html file i need to provide a absolute path that is going to be path module
const app =express()


// EXPRESS STATIC = BUILT IN MIDDLEWARE
// setup static and middleware
app.use(express.static('./punblic')) // made a public named folder and paste all of that files in that you will get all the files on the creen just change url localhost/5000 full app => localhost/500/css => css file 

app.get('/',()=>{// now in case of get i want to send file more specifically html file => in order to do that i need to use send file method which comes with express
    
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))// the path to my index html  => here the problem can be resolved very easily that happens with HTML app = app.js
})

app.all('*',(req,res)=>{//  its the request for all that which touch 404
    res.status(400).send('resorce not found')
})

app.listen(5000,()=>{// port we are listenkng on
    console.log('server is listening on port 5000....');
    
})


// STATIC ASSET = FILE THAT SERVER DOESNT HAVE TO CHANEG IT  

/*
so instead of our http ex where we cteated a path for every sucj resource and if we y=to have i dont know 20000 images i wiuld habe to repaet the same steps intead since thus is a static asset meaning an asset where the server doesnt need to change it we w=simply place it in designated foleder again in the common name for those folders are public or static and then we just dump all  those assets in thers so if i were to have i odnyt know 20000 extra images in here i can just dumo them and exprees will take care of it all it will set up the  paths it will set up the mime types it will set up the satus codes and all of that good stuff so hopefully that is clear static assets are just files that server dpesnt jhave to change and an exaple of a static asset is an image file here the stype file and also a js file and here come the next que-->
*/

/*
js makes my app dynamic it adds all the functionality so how come this is just another static asset and to answer your qu yeah you're right js does make our apps dynamic however thinka bout it this is a brower app so it makes dyanameic on a browser as far as servers is concerned  it is just as asset downt need to change now if youre wonderning well how to set up something dynamic  just plz put the pin on that and were goung to cover that we covber server side rendeing bcz there is such thing as template engines and the simplets way for me to explane that it is imagine the scenario where you can actually log in or in other way just showcase whoever is visiting the site and then dynamically i would dislay for ex name so if the peter logs in then im sending back the html with the text of hi peter now if the john logs in then of course im sending bavk the username with the value of john so hpefully you get the gist 
*/

/*
gist where in this case notice this is just same old index html that im sending back regardless of who is vid=siting the soote but yes theres also an option of setting this dynamically where dependining on whos visiting the site or what the isere is trying to do im actuallu modifying my fiel before i sending it back 
*/

// SUMMARY

/*
🧠 What that whole comment is saying (in plain English)
🔹 1. What are static assets?

Files that don’t change on the server

Examples:

HTML
CSS
Images
JS (frontend)

👉 These are just files served as-is, not dynamically generated.

🔹 2. What problem are we solving?

Earlier, without static middleware:

You had to create separate routes for everything
app.get('/style.css', ...)
app.get('/image.png', ...)

❌ That’s messy and not scalable (imagine 2000 images 💀)

🔹 3. Solution → express.static()

Instead of writing routes for each file:

app.use(express.static('./public'))

✔ Now Express:

Automatically serves all files inside public
Handles paths
Handles file types (MIME types)
Sends correct responses
🔹 4. What happens now?

If your folder is:

public/
  ├── index.html
  ├── style.css
  ├── logo.png

You can access:

localhost:5000/style.css
localhost:5000/logo.png

🔥 No need to write routes manually.

🔹 5. Important idea in comment

“Server doesn’t need to change it”

Meaning:

Server is NOT modifying these files
Just sending them as they are
🔹 6. Then why is JS called static here?

This part is important:

JS makes apps dynamic BUT still a static asset

Why?

👉 Because:

Server just sends the JS file
Browser runs it

So from server’s POV:

JS = just another file
🔹 7. Dynamic vs Static (Final clarity)
Type	Who handles logic
Static	Browser (after download)
Dynamic (server-side)	Express / Node
🔹 8. Last part (very important concept)

They mention:

“Right now we send same index.html to everyone”

Meaning:

res.sendFile('index.html')

Everyone gets same page ❌

🔹 But dynamic idea is:

👉 Modify response before sending

Example:

res.send(`<h1>Hello ${username}</h1>`)

Now response changes based on user ✅

⚡ In one line:

👉 Static = just send files
👉 Dynamic = generate response based on logic
*/