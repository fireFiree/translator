const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WordGroupSchema = new Schema({
  name: {type: String},
  createdAt: {type: Date, default: new Date()},
  createdBy: {type: Schema.Types.ObjectId},
  words: [{type: Schema.Types.ObjectId, ref: 'Word'}]
})

module.exports = mongoose.model('WordGroup', WordGroupSchema)
