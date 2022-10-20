const express = require('express')
const cors = require('cors')
require('dotenv').config({ path: './config.env' })
//* Database connected
const MysqlConnection = require('./Server/Database')


const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
MysqlConnection.connect(() => console.log('Connected to MySQL'))



//* Routes
app.use('/', require('./Server/Routes'))



const PORT = process.env.PORT || 1001
app.listen(PORT, () => console.log(`http://localhost:${PORT}`)).on('error', error => console.log(error))
