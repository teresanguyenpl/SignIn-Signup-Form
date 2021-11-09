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

app.get('/register', (req, res) => {
    res.render('register.ejs')
})


app.listen(3000) 

