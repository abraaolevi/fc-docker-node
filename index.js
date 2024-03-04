const express = require('express')
const mysql = require('mysql2')
const getRandomName = require('./names')

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};
const connection = mysql.createConnection(config)
connection.query('INSERT INTO people (name) VALUES (?)', getRandomName())

const app = express()
const port = 3000

app.use(express.json())

app.post('/', (req, res) => {
    const { name } = req.body
    const person = name || 'new person'

    connection.query('INSERT INTO people (name) VALUES (?)', person)

    res.send('Added ' + person)
})

app.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM people',
        function (err, results, fields) {
            const li = results.map((r) => `<li>${r.name}</li>`)

            res.send(`<h1>Full Cycle</h1><ul>${li.join('')}</ul>`)
        });
})

const server = app.listen(port, ()=> {
    console.log('Listening at ' + port)
})

process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server')

    connection.end()

    server.close(() => {
        console.log('HTTP server closed')
    })
})