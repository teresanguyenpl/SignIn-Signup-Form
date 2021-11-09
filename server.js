const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res)  => {
    console.log("Here")
    res.send("Hi")
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {
   
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', (req, res) => {

})


app.listen(3000) 

