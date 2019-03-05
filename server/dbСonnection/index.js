const mongoose = require('mongoose')
const CONFIG = require('../etc/config.json')

mongoose.Promise = require('bluebird')
mongoose.connect(`mongodb://${CONFIG.db.host}:${CONFIG.db.port}/${CONFIG.db.name}`)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error:'))
db.once('open', () => { console.log('Mongoose connection is open') })

module.exports = db
