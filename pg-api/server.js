const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const pg = require('pg')
const app = express()
const PORT = 3000

const pool = pg.Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  ssl: false,
  max: 10
})

// pool.connect((error, db, done) => {
//   if (error) {
//     return console.log(error)
//   } else {
//     db.query('SELECT * FROM todo', (error, table) => {
//       if (error) {
//         return console.log(error)
//       } else {
//         console.log(table.rows)
//       }
//     })
//   }
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))
app.use(function (request, response, next) {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.listen(PORT, () => console.log('Listening on port: ' + PORT))
