const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.listen(process.env.PORT || 8081, () => {
  console.log(`Server is running on ${process.env.PORT || 8081} port`)
})
