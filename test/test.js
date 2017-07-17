process.env.NODE_ENV = 'test'

const chai = require('chai')
const { expect } = require('chai')

const { notFound } = require('../commands.js')
const { listQuery } = require('../database/queries')
const printer = require('../printer')


beforeEach(() => {
	const testTodos = [
		{ id: 1, task: 'Wash the dog' },
		{ id: 2, task: 'Wash the car' },
		{ id: 3, task: 'Wash the dishes' }
	]

	printer.print('')
	printer.print('ID Description')
	printer.print('-- -----------')
	testTodos.forEach((todo) => {
		printer.print(todo.id + ' ' + todo.task)
	})
	printer.print('')
	printer.print(testTodos.length + ' tasks.')
})

describe.only('listQuery', (done) => {
	it('should return a list of tasks from a todo list', (done) => {
		listQuery()
			.then(data => {
				console.log(data)
				expect(data).to.eql('')
			})
		done()
	})
})

describe('notFound()', () => {
	it('should return an error message if given an unrecognized command and describe permissible commands', (done) => {

		const command = 'vegetate'
		const errorMessage = `Sorry: command \`${command}\` not recognized :(\nAccepted commands are\nlist\nadd\nupdate\ndelete`

		expect(notFound(command)).to.be.a('string')
		expect(notFound(command)).to.eql(errorMessage)
		done()
	})
})
