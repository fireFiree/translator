const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {type: String, required: true},
  password: {type: String, required: true}
})

/* UserSchema.pre('save', function (next) {
  const user = this
  if (user.isModified('password') || user.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) return next(error)
      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) return next(error)
        user.password = hash
        next()
      })
    })
  } else {
    return next()
  }
}) */

module.exports = mongoose.model('User', UserSchema)
