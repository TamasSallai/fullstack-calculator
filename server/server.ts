import express from 'express'
import fs from 'fs'

const app = express()
app.use(express.json())

app.get('/api', (req, res) => {
  res.send('Hello World')
})

app.get('/api/result', (req, res) => {
  fs.readFile('./data/result.json', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).send({ error: 'No such file or directory. :(' })
      }
      return res.status(500).send({ error: 'Internal server error. :(' })
    }
    return res.status(200).send(JSON.parse(data.toString()))
  })
})

app.post('/api/result', (req, res) => {
  const data = JSON.stringify(req.body)
  fs.writeFile('./data/result.json', data, (err) => {
    if (err) {
      console.log(err)
      return res.status(500).send({ error: 'Internal server error. :(' })
    }
    return res.status(200).send({ message: 'Result successfuly saved. :)' })
  })
})

const PORT = 8000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
