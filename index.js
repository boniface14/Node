//console.log('Hello world')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
const path = require('path')
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.listen(3000, function () {
    console.log('listening on 3000')
})
//app.get(path, callback)
app.get('/', (req, res) => {
    res.send('Hello world')
})
//app.get(path, callback)
app.get('/about', (req, res) => {
    res.send('about us page')
})
//post methods
app.post('/', (req, res) => {
    res.send('Got a post')
})
// put method
app.put('/', (req, res) => {
    res.send('Got a put request at /user')
})
// delete method
app.delete('/', (req, res) => {
    res.send('Got a delete at /user')
})
// params
app.get('/users/:name', (req, res) => {
    res.send('hello  ' + req.params.name)
})
//error page
//app.get('*', (req, res) => {
// res.send('Dont worry about this we will sort it soon')
//})
app.get('/users', (req, res) => {
    res.send('This is a class' + req.query.class + 'cohort' + req.query.cohort)
})
app.get('/register_form', (req, res) => {
    //    console.log('body',req.body)
    //    console.log('query',req.query)
    res.render('register_form')
})
// another method for post
app.post('/register_form', (req, res) => {
    console.log("form has been posted")
    console.log('body', req.body)
    console.log('query', req.query)
    console.log('query params', req.query)

})