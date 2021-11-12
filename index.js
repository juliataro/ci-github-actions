const express = require('express')
const app = express()

app.use("/", function(req, res){
    res.send({
        body: "hello there"
    })
})

app.listen(4000)

const attack = require('./attack')

console.log(
    attack("Smelly Ogre", 23)
)