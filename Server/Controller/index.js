const MysqlConnection = require('../Database')
const shortId = require('shortid')




// POST   /shortener
exports.urlShortener = async (req, res) => {
    const { longUrl } = req.body
    const data = { longUrl, shortUrl: shortId.generate() }

    await MysqlConnection.query(`INSERT INTO url SET ?`, data, (error, rows, result) => {
        if (error) throw error
        res.status(200).json(rows)
    })
}





// GET   /ShortUrl
exports.ShortUrl = async (req, res) => {
    await MysqlConnection.query(`SELECT * FROM url WHERE shortUrl = ${req.params.shortUrl}`, (error, rows, result) => {
        if (error) throw error
        res.status(200).json(rows)
    })
}
