const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ResultSchema = new mongoose.Schema({
  passedAt: {type: Date, default: new Date()},
  passedBy: {type: Schema.Types.ObjectId, ref: 'User'},
  wordGroup: {type: Schema.Types.ObjectId, ref: 'WordGroup'},
  result: {type: Schema.Types.Number, default: 0},
  numberOfQuestions: {type: Schema.Types.Number}
})

module.exports = mongoose.model('Results', ResultSchema)
