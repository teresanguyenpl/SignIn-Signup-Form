const express = require("express")
const router = express.Router()

router.get("/", (req, res) => { //This is actually /users
    res.send("User List")  
})

router.get("/new", (req, res) => { //This is actually /users/new
    res.send("User New Form")
})



module.exports = router