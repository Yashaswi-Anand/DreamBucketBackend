const express = require('express');
const port = 8000
const app = express()

app.get('/', (req,res) =>{
    return res.send('Hello, backend !!!')
})

app.get('/home', (req,res) =>{
    return res.send('Home page!!!')
})

app.listen(port, function(err){
    if(err) {console.log(err);}
    console.log(`Server is running on port: ${port}`);
})