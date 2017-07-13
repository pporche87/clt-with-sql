const promise = require('bluebird')

const options = { promiseLib: promise }

const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/clt_test'
const db = pgp(connectionString)

module.exports = { db }
