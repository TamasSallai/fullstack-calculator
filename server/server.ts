import express from 'express'
import fs from 'fs'
const app = express()

app.get('/api', (req, res) => {
  res.send('Hello World')
})

app.get('/api/result', (req, res) => {
  fs.readFile('./data/result.json', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).send({ error: 'No such file or directory :(' })
      }
      return res.status(500).send({ error: 'Internal Server error :(' })
    }
    return res.status(200).send(JSON.parse(data.toString()))
  })
})

const PORT = 8000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
