const express = require("express");
const bp = require('body-parser')
const fs = require('fs')
const path = require("path")

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '/src/')));

app.get('/', (req, res) => {
    console.log("Blank \n")
    res.sendFile(path.join(__dirname, '/src/index.html'))
})

app.get('/index.html', (req, res) => {
    console.log("Index\n")
    res.sendFile(path.join(__dirname, '/src/index.html'))
})

app.get('/airForce.html', (req, res) => {
    console.log("Air Force\n")
    res.sendFile(path.join(__dirname, '/src/airForce.html'))
})

app.get('/cssRoulette.html', (req, res) => {
    console.log("Roulette\n")
    res.sendFile(path.join(__dirname, '/src/cssRoulette.html'))
})

app.get('/commentLog.html', (req, res) => {
    console.log("log\n")
    res.sendFile(path.join(__dirname, '/src/commentLog.html'))
})

app.get('flamingo.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/flamingo.jpg'))
})

app.post('/commentLog.html', (req,res) => {
    console.log(req.body)
    var body = req.body.commentBox
    var date = new Date();
    var dateString = String(date)

    toLog = dateString + ": " + body +'\n'

    fs.appendFile('comments.txt', toLog, (err) => {
        if (err) throw err;
    })
    res.sendFile(path.join(__dirname, '/src/commentLog.html'))

})


app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})

