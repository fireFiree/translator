const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WordSchema = new Schema({
  word: {type: String},
  translation: {type: String},
  partOfSpeech: {type: String},
  wordGroup: {type: Schema.Types.ObjectId, ref: 'WordGroup'}
})

module.exports = mongoose.model('Word', WordSchema)
