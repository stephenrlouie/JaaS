var express = require('express')
var join = require('path').join

var router = new express.Router()

function home (req, res) {
  res.render('site/home')
}
router.get('/', home)

module.exports = router
