const express = require('express')
const app = express()
const cors = require("cors")


app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/api/content", (req, res) => {
    res.json({message: "Welcome to practice session"})
    
})

app.get("/api/greeting", (req, res) => {
    res.json({ message: "Hello World, from node server!!!" });
  });

app.listen(3000,() => {
    console.log("server is running in port 3000")
})



