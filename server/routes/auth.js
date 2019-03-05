const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')

router.post('/registration', (req, res) => {
  User.find({name: req.body.username})
    .then(data => {
      if (data.length) {
        res.status(401).send({
          success: false,
          error: 'User already exist'
        })
      } else {
        const newUser = new User({name: req.body.username, password: req.body.password})
        newUser.save(err => {
          if (!err) {
            res.status(200).send({
              success: true,
              user: {name: req.body.username, password: req.body.password}
            })
          } else {
            res.status(500).send({
              success: false,
              error: err
            })
          }
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        success: false,
        error: err.message
      })
    })
})

router.post('/login', passport.authenticate('local'), (req, res) => {
  User.findOne({name: req.body.username})
    .then(user => {
      res.send({
        success: true,
        user
      })
    })
    .catch(err => {
      res.status(500).send({
        sucсess: false,
        error: err.message
      })
    })
})

router.get('/logout', (req, res) => {
  try {
    req.logOut()
    res.send({
      success: true
    })
  } catch (err) {
    res.send({
      success: false,
      error: err.message
    })
  }
})

router.get('/authorize', (req, res) => {
  if (req.user) {
    return res.status(200).send(req.user)
  }
  return res.status(401).send({})
})

module.exports = router
