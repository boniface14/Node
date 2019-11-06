//console.log('Hello world')
const express = require('express');
const app =express();
app.listen(3000,function(){
    console.log('listening on 3000')
})
//app.get(path, callback)
app.get('/', (req,res)=>{
res.send('Hello world')
})
//app.get(path, callback)
app.get('/about', (req,res)=>{
    res.send('about us page')
    })
    