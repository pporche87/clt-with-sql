const promise = require('bluebird')

const options = { promiseLib: promise }

const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/clt'
const db = pgp(connectionString)
const printer = require('../printer')

const listQuery = () => {
	return db.any('SELECT * FROM tasks')
		.then((data) => {
			printer.print('')
			printer.print('ID Description')
			printer.print('-- -----------')
			data.forEach((todo) => {
				printer.print(todo.id + ' ' + todo.task)
			})
			printer.print('')
			printer.print(data.length + ' tasks.')
		})
}

// add
const addQuery = () => {

}

// delete
const deleteQuery = () => {

}

// update
const updateQuery = () => {

}

module.exports = {
	listQuery,
	addQuery,
	deleteQuery,
	updateQuery
}
