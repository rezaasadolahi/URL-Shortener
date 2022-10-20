const express = require('express')
const Router = express.Router()

//* Controller
const { urlShortener, ShortUrl } = require('../controller')




Router.route('/shortener').post(urlShortener)
Router.route('/:shortUrl').get(ShortUrl)





module.exports = Router
