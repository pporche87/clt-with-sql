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
			printer.print('')
		})
}

const addQuery = (task) => {
	return db.one('INSERT INTO tasks (task) VALUES ($1) RETURNING *', [task])
		.then((data) => {
			printer.print('Created task ' + data.id + '.')
		})
}

const deleteQuery = (task) => {
	return db.one('DELETE FROM tasks WHERE id=$1 RETURNING *', [task])
		.then((data) => {
			printer.print(`Completed the task '${data.task}'`)
		})
}

const updateQuery = (task, updateTask) => {
	return db.one('UPDATE tasks SET task=$2 WHERE task=$1 RETURNING *', [task, updateTask])
		.then((data) => {
			printer.print(`Updated the task '${data.task}'`)
		})
}

module.exports = {
	listQuery,
	addQuery,
	deleteQuery,
	updateQuery
}
