const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const pg = require('pg')
const app = express()
const cors = require('cors')
const PORT = 5000

const url = require('url')
try {
  require('dotenv').config()
} catch (e) {
  console.log(e)
}

const params = url.parse(process.env.DATABASE_URL)
const auth = params.auth.split(':')
const pool = pg.Pool({
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: params.hostname !== 'localhost'
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/lists', function (req, res) {
  pool.connect((error, db, done) => {
    if (error) {
      return res.status(400).send(error)
    } else {
      db.query('SELECT * FROM todo ORDER BY ID', (error, table) => {
        if (error) {
          return res.status(400).send(error)
        } else {
          res.status(200).send(table.rows)
        }
      })
    }
  })
})

app.post('/lists', function (req, res) {
  let body = req.body
  let type = body.type
  let task = body.task
  let completed = body.completed
  let values = [type, task, completed]

  pool.connect((error, db, done) => {
    if (error) {
      return res.status(400).send(error)
    } else {
      db.query(
        'INSERT INTO todo (type, task, completed) values($1::varchar, $2::text, $3::boolean)',
        [...values],
        (error, table) => {
          if (error) {
            return res.status(400).send(error)
          } else {
            console.log('Data posted.')
            db.end()
            res.status(201).send({ message: 'Data insterted!' })
          }
        }
      )
    }
  })
})

app.put('/lists/:id', function (req, res) {
  let id = req.body.id
  let body = req.body
  let type = body.type
  let task = body.task
  let completed = body.completed
  let values = [type, task, completed, id]

  pool.connect((error, db, done) => {
    if (error) {
      return res.status(400).send(error)
    } else {
      db.query(
        'UPDATE todo set type=$1::varchar, task=$2::text, completed=$3::boolean WHERE id=$4::int',
        [...values],
        (error, table) => {
          if (error) {
            return res.status(400).send(error)
          } else {
            console.log('Data updated.')
            db.end()
            res.status(201).send({ message: 'Data updated!' })
          }
        }
      )
    }
  })
})

app.delete('/lists/:id', function (req, res) {
  let id = req.params.id
  pool.connect((error, db, done) => {
    if (error) {
      return res.status(400).send(error)
    } else {
      db.query('DELETE FROM todo WHERE id=$1::int', [id], (error, table) => {
        if (error) {
          return res.status(400).send(error)
        } else {
          console.log('Data deleted.')
          res.status(200).send({ message: 'Data deleted!' })
        }
      })
    }
  })
})

app.delete('/lists', function (req, res) {
  pool.connect((error, db, done) => {
    if (error) {
      return res.status(400).send(error)
    } else {
      db.query('DELETE FROM todo', (error, table) => {
        if (error) {
          return res.status(400).send(error)
        } else {
          console.log('All data deleted.')
          res.status(200).send({ message: 'All data deleted!' })
        }
      })
    }
  })
})

app.listen(PORT, () => console.log('Listening on port: ' + PORT))
