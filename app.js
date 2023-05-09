require('dotenv').config()
const csvToJSON = require('./utils/csvToJSON')

const port = process.env.PORT || 3000
const secret = process.env.EXTERNAL_API_KEY
const externalAPI = process.env.EXTERNAL_API

const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/files/list', async (req, res) => {
  try {
    const response = await axios.get(`${externalAPI}/files`, {
      headers: {
        Authorization: `Bearer ${secret}`
      }
    })
    res.send(response.data)
  } catch (error) {
    console.error(error)
    res.status(error.response.status).send(error.response.data)
  }
})

app.get('/file/:filename', async (req, res) => {
  const filename = req.params.filename
  const url = `${externalAPI}/file/${filename}`

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${secret}`
      }
    })
    const csv = response.data
    const json = csvToJSON(csv)
    res.send(json)
  } catch (error) {
    console.error(error)
    res.status(error.response.status).send(error.response.data)
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

module.exports = app
