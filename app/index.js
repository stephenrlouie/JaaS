var express = require('express')

var app = express()
app.set('views', __dirname)
app.set('view engine', 'jade')

app.use(require(__dirname + '/site/router'))
app.use('/api', require(__dirname + '/jokes/router'))

app.use(require(__dirname + '/errors/not-found'))

module.exports = app
