const printer = require('./printer')
const {
	listQuery,
	addQuery,
	deleteQuery,
	updateQuery
} = require('./database/queries')

const list = () => {
	listQuery()
		.then(() => {
			process.exit(0)
		})
		.catch((err) => {
			console.log(err.message)
			process.exit(1)
		})
}

const add = (task) => {
	addQuery(task)
		.then(() => {
			process.exit(0)
		})
		.catch((err) => {
			console.log(err.message)
			process.exit(1)
		})
}

const del = (task) => {
	deleteQuery(task)
		.then(() => {
			process.exit(0)
		})
		.catch((err) => {
			console.log(err.message)
			process.exit(1)
		})
}

const update = (task, updateTask) => {
	updateQuery(task, updateTask)
		.then(() => {
			process.exit(0)
		})
		.catch((err) => {
			console.log(err.message)
			process.exit(1)
		})
}

const notFound = (command) => {
	const errorMessage = `Sorry: command \`${command}\` not recognized :(\nAccepted commands are\nlist\nadd\nupdate\ndelete`
	printer.print(errorMessage)
	return errorMessage
}

module.exports = {
	list,
	add,
	del,
	update,
	notFound
}
