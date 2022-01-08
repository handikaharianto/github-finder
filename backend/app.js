const PORT = process.env.PORT || 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/users', (req, res) => {
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_URL}/users`,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  }

  axios
    .request(options)
    .then((response) => res.json(response.data))
    .catch((error) => console.log(error))
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))
