const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
  User.find({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        success: false,
        error: err.message
      })
    })
})

router.get('/:id', (req, res) => {
  User.findOne({_id: req.params.id})
    .then(user => {
      res.status(200).send(user)
    })
    .catch(err => {
      res.status(500).send({
        success: false,
        error: err.message
      })
    })
})

router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.param.id, req.body)
    .then(user => {
      res.status(200).send(user)
    })
    .catch(err => {
      res.status(500).send({
        success: false,
        error: err.message
      })
    })
})

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => {
      res.status(200).send({
        sucess: true,
        message: 'User successfully removed'
      })
    })
    .catch(err => {
      res.status(500).send({
        success: false,
        error: err.message
      })
    })
})

module.exports = router
