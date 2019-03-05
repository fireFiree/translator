const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const CONFIG = require('./etc/config.json')

const app = express()

const expressSession = require('express-session')
const MongooseStore = require('mongoose-express-session')(expressSession.Store)
const User = require('./models/User')
const routes = require('./routes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(expressSession({
  secret: CONFIG.secret,
  resave: false,
  rolling: false,
  saveUninitialized: true,
  store: new MongooseStore({
    connection: mongoose
  }),
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}))

/* const dbConnection =  */require('./dbСonnection')

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({
      name: username
    }, (err, user) => {
      if (err) {
        return done(err)
      }

      if (!user) {
        return done(null, false)
      }
      console.log(password, user.password)
      if (user.password !== password) {
        return done(null, false)
      }
      return done(null, user)
    })
  }
))

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

app.use('/api', routes)

app.listen(process.env.PORT || CONFIG.serverPort, () => {
  console.log(`Server is running on ${process.env.PORT || CONFIG.serverPort} port`)
})
