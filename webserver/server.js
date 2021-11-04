const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get('/', (req, res)  => {
    res.render("index", {name: "Teresa"})
})

app.get('/login', (req, res)  => {
    res.render("login")
})

app.get('/register', (req, res)  => {
    res.render("register")
})

const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.listen(5000) 

