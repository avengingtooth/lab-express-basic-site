const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')
hbs.registerPartials(`${__dirname}/views/partials`)
app.set('views', __dirname + '/views');

app.get('/home', (req, res, next) => {
    res.render("home")
})

app.get('/about', (req, res, next) => {
    res.render("about")
})

app.get('/works', (req, res, next) => {
    res.render("works")
})




app.listen(3000, () => console.log('My first app listening on port 3000! '));