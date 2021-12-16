const express = require('express')
const path = require('path')

const app = express()

const Rollbar = require('rollbar')

let rollbar = new Rollbar({
    accessToken: 'ab7b270ef9e24c61874ff1ff409aee8a'
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})


const port = process.env.PORT || 4005
app.listen(port, () => {console.log(`port ${port}.`)})

