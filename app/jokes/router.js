var joke = require('./joke-model')
var log = require('bole')('joke/router')
var router = require('express').Router()

function getJokes (req, res) {
	res.status(201).send()
}

function createJoke (req, res) {
  res.status(201).send()
}

router.post('/jokes', createJoke)
router.get('/jokes', getJokes)
module.exports = router

