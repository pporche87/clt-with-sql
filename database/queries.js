const db = require('./config')

db.query('SELECT * FROM', function(err, res) {
	if(err) throw err

})
