const list = () => {

}

const add = () => {

}

const del = () => {

}

const update = () => {

}

const notFound = (command) => {
	return `Sorry: command \`${command}\` not recognized :(\nAccepted commands are\nlist\nadd\nupdate\ndelete`
}

module.exports = {
	list,
	add,
	del,
	update,
	notFound
}
