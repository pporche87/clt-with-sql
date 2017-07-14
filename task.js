const {
	list,
	add,
	del,
	update,
	notFound
} = require('./commands')
const {
	listQuery
} = require('./database/queries')



const runTodoList = () => {
	const command = process.argv[2]
	const task = process.argv[3]
	const updateTask = process.argv[4]

	if (command === 'list') {
		list()
	} else if (command === 'add') {
		add(task)
	} else if (command === 'done') {
		del(task)
	} else if (command === 'update') {
		update(task, updateTask)
	} else {
		notFound(command)
	}

}

runTodoList()
