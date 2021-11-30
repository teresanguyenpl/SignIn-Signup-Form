const express = require('express')
const app = express()


app.set('view engine', 'ejs') //For ejs
app.use(express.static(__dirname + '/public'));  //For css



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

app.get('/home', (req,res) => {
    res.render('home.ejs')
})

app.get('/about', (req,res) => {
    res.render('about.ejs')
})




app.listen(3000) 

