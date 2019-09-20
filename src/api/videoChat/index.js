'use strict'
const { Router } = require('express')
const videoChatController = require('./v1/videoChat.controller').controller

const router = new Router()

router.get('/newSala', videoChatController.newSala)

module.exports.router = router