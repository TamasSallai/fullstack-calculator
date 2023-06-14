import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()
app.use(express.json())

app.get('/api', (req, res) => {
  res.send('Hello World')
})

app.get('/api/result', (req, res) => {
  fs.readFile('./data/calculator.json', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).send({ error: 'No such file or directory.' })
      }
      return res.status(500).send({ error: 'Internal server error.' })
    }
    return res.status(200).send(JSON.parse(data.toString()))
  })
})

app.post('/api/result', (req, res) => {
  const data = JSON.stringify(req.body)
  const filePath = `${__dirname}/../data/calculator.json`
  const dirPath = path.dirname(filePath)

  if (!fs.existsSync(dirPath)) {
    fs.mkdir(dirPath, (err) => {
      if (err)
        return res.status(500).send({ error: 'Could not create directory.' })
    })
  }

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).send({ error: 'No such file or directory.' })
      }
      return res.status(500).send({ error: 'Internal server error.' })
    }
    return res.status(200).send({ message: 'Result successfuly saved.' })
  })
})

const PORT = 8000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
