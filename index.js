const express = require('express')
const app = express()
const port = 3000
const movies = require('./movies.json')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const USERNAMES = [
  "parker@marvel.com",
  "stark@marvel.com",
  "rogers@marvel.com",
  "banner@marvel.com"
]

const PASSWORD = "elvencera"

const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkN1YWxxdWllcmEiLCJyb2xlIjoiSGVybyJ9.pg8CX5yyFB5Wkxkordix0PO3FycIt8mQm96uFXSf43A'

app.post('/api/auth', (req, res) => {
  const { username, password } = req.body
  if (password === PASSWORD && USERNAMES.includes(username)) {
    res.status(200).json({token: JWT})
  } else {
    res.status(401).end()
  }
})

app.get('/api/movies', (req, res) => {
  const authorization = req.header('Authorization')
  if (authorization === JWT) {
    res.status(200).json(movies)
  } else {
    res.status(401).end()
  }
})

app.use((req, res, next) => {
  res.status(404).send("404 not found")
})

app.listen(port, () => console.log(`Marvel app ready on port ${port}!`))